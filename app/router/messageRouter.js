const router = require('express-promise-router')();

const {
  self,
  index,
  sendMessage,
  getMessageList
} = require('../Controllers/MessageController');
const { validate } = require('../middelwares/validator');
const sendMessageSchema = require('../RequestSchemaList/sendMessageSchema.json');
const getMessageSchema = require('../RequestSchemaList/getMessageSchema.json');

router.get('/', validate(getMessageSchema), getMessageList.bind(self));
router.post('/send', validate(sendMessageSchema), sendMessage.bind(self));


module.exports.messageRouter = router;