const { Message, sequelize } = require('../../models');

function generatechatKey({from, to, topic}, reverse = false) {
  if (reverse) {
    return `${to}#${from}#${topic}`;
  }
  return `${from}#${to}#${topic}`;
}

async function sendMsg ({ from, to, topic, text }) {
  const model = {
    'from#to#topic': generatechatKey({ from, to, topic }),
    chat: text
  };
  const message = await Message.create(model);
  return {
    messageId: message.id,
    from,
    to,
    topic,
    text
  };
}

async function getMessageSorted({from, to, topic , date}) {
  const resultList = await sequelize.query(`
    SELECT \`from#to#topic\`, chat, createdAt FROM \`Messages\`
    WHERE(\`from#to#topic\` = :key
    OR \`from#to#topic\` = :reversedKey) AND(createdAt >= :startDate
    AND createdAt <= :endDate) ORDER BY createdAt ASC `,
    {
      replacements: {
        key: `${generatechatKey({from, to, topic})}`,
        reversedKey: `${generatechatKey({from, to, topic}, true)}`,
        startDate: `${date} 00:00:00`,
        endDate: `${date} 23:59:59`,
      },
      type: sequelize.QueryTypes.SELECT
    });

    const messageList = resultList.map(item => {
      const [from, to, topic] = item['from#to#topic'].split('#');
      return ({
        from,
        to,
        topic,
        text: item.chat,
        time: item.createdAt,
      })
    });

    return messageList;
}

module.exports = {
  sendMsg,
  getMessageSorted,
};

