const router = require('express-promise-router')();

const { self, index, sendMessage } = require('../Controllers/MessageController');
const { validatePostRequest } = require('../middelwares/validatePostRequest');
const sendMessageSchema = require('../RequestSchemaList/sendMessageSchema.json');

router.get('/', index.bind(self));
router.post('/send-message', validatePostRequest(sendMessageSchema), sendMessage.bind(self));


module.exports.messageRouter = router;