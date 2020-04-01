const router = require('express-promise-router')();

const {
  self,
  sendMessage,
  getMessageList,
  getMessageListToUser
} = require('../Controllers/MessageController');
const { validate } = require('../middlewares/validator');
const { sendMessageSchema } = require('../RequestSchemaList/sendMessageSchema.js');
const { getMessageSchema } = require('../RequestSchemaList/getMessageSchema.js');
const { MessageListToUserSchema } = require('../RequestSchemaList/MessageListToUserSchema.js');

router.get('/', validate(getMessageSchema), getMessageList.bind(self));
router.get('/me', validate(MessageListToUserSchema), getMessageListToUser.bind(self));
router.post('/send', validate(sendMessageSchema), sendMessage.bind(self));


module.exports.messageRouter = router;