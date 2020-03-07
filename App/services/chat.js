const { Message } = require('../../models');

module.exports = {
  sendMsg: async ({ from, to, topic, text }) => {
    const model = {
      'from#to#topic': `${from}#${to}#${topic}`,
      chat: text
    };
    const message = await Message.create(model);
    return message;
  }
};

