const Ajv = require('ajv');

const { ServerError } = require('../../config/serverConfig');

const ajv = new Ajv({ allErrors: true, jsonPointers: true });
require('ajv-errors')(ajv /*, {singleError: true} */);

const validate = schema => {
  return (req, res, next) => {
    const requestBody = req.body;
    const validate = ajv.compile(schema);
    const valid = validate(requestBody);
    if (valid) {
      return next();
    }
    // string with all errors and data paths
    res.status(400).json(validate.errors.map(error => error.params));
  };
}

  module.exports.validatePostRequest = validate;