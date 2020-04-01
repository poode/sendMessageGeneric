exports.MessageListToUserSchema = {
  "type": "object",
  "required": [
    "to",
  ],
  "properties": {
    "to": {
      "type": "string",
      "minLength": 3,
      "maxLength": 255,
      "errorMessage": "please send me username of the receiver"
    },
    "topic": {
      "type": "string",
      "minLength": 3,
      "maxLength": 255,
      "errorMessage": "please send me the topic they are talking about"
    },
  }
}