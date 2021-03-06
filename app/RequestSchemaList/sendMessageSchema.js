exports.sendMessageSchema = {
  "type": "object",
  "required": [
      "from",
      "to",
      "topic",
      "text"
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
    "text": {
      "type": "string",
      "minLength": 1,
      "maxLength": 5000,
      "errorMessage": "please send me the topic they are talking about"
    }
  }
}