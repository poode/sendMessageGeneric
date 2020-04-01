const _ = require('lodash');

const db = require('../../models');

function generateChatKey({from, to, topic}, reverse = false) {
  if (reverse) {
    return `${to}#${from}#${topic}`;
  }
  return `${from}#${to}#${topic}`;
}

function reFormatChatResult(resultList, omittedFieldList = []) {
  return resultList.map(item => {
    const [from, to, topic] = item['from#to#topic'].split('#');
    const result = {
      from,
      to,
      topic,
      text: item.chat,
      time: item.createdAt,
    };

    omittedFieldList.length ? omittedFieldList.forEach(field => delete result[field]) : '';

    return result;
  });
}

async function sendMsg ({ from, to, topic, text }) {
  const model = {
    'from#to#topic': generateChatKey({ from, to, topic }),
    chat: text
  };
  const message = await db.Message.create(model);
  return {
    from,
    to,
    topic,
    text,
    time: message.createdAt
  };
}

async function getMessageSorted({from, to, topic}) {
    const resultList = await db.Message.findAll({
      where: {
        'from#to#topic': {
          [db.Sequelize.Op.or]: [
            generateChatKey({from, to, topic}),
            generateChatKey({from, to, topic}, true)
          ]
        },
      },
      raw: true
    })

    const messageList = reFormatChatResult(resultList);

    return messageList;
}

async function findByToUserMessageList({to, topic}) {
  const result = await db.Message.findAll({
    where: {
      'from#to#topic': {
        [db.Sequelize.Op.like]: `%#${to}#%`
      }
    }
  });

  let formattedTopicsWithUniqueFromAndTopic = _.uniqBy(reFormatChatResult(result,
    ['time', 'to', 'text']),
    v => [v.from, v.topic].join());
    
  if(topic) {
    formattedTopicsWithUniqueFromAndTopic = formattedTopicsWithUniqueFromAndTopic.filter(item => item.topic === topic); 
  }  

  return formattedTopicsWithUniqueFromAndTopic;
}

module.exports = {
  sendMsg,
  getMessageSorted,
  findByToUserMessageList,
};
