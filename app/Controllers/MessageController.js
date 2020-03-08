const { sendMsg, getMessageSorted } = require('../services/chat');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class MessageController {
  self = this;

  index(req, res, next) {
    res.json({ message: 'here I am' });
  }

  async sendMessage(req, res, next) {
    const message = await sendMsg(req.body);
    res.json({ message: 'message has been sent successfully', data: message });
  }

  async getMessageList(req, res, next) {
    const result = await getMessageSorted(req.query);
    res.json({ message: 'found messages!', data: result });
  }


}