exports.getMessageSchema = {
  "type": "object",
  "required": [
    "from",
    "to",
    "topic"
  ],
  "properties": {
    "from": {
      "type": "string",
      "minLength": 3,
      "maxLength": 255,
      "errorMessage": "please send me username of the sender"
    },
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
    // "date": {
    //   "type": "string",
    //   "pattern": "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
    //   "errorMessage": "please send me a valid date"
    // }
  }
}