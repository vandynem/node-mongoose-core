'use strict';
const Joi = require('joi');
module.exports = {
  async authSchema(params) {
    return new Promise(async (resolve, reject) => {
      try {
        let schema = Joi.object().keys({
          username: Joi.string().min(4).max(15).required(),
          email: Joi.string().email().lowercase().required(),
          password: Joi.string().min(2).required(),
          created: Joi.date(),
        });
        let validInput = Joi.validate(params, schema);
        if (validInput.error)
          reject(validInput.error.details[0].message);

        let value = validInput.value;
        resolve(value);
      } catch (err) {
        reject(err);
      }
    });
  },
  async loginSchema(params) {
    return new Promise(async (resolve, reject) => {
      try {
        let schema = Joi.object().keys({
          email: Joi.string().email().lowercase().required(),
          password: Joi.string().min(2).required(),
        });
        let validInput = Joi.validate(params, schema);
        if (validInput.error)
          reject(validInput.error.details[0].message);

        let value = validInput.value;
        resolve(value);
      } catch (err) {
        reject(err);
      }
    });
  },
  async findByIdValidate(params) {
    return new Promise(async (resolve, reject) => {
      try {
        let schema = Joi.object().keys({
          _id: Joi.string().required(),
        });
        let validInput = Joi.validate(params, schema);
        if (validInput.error)
          reject(validInput.error.details[0].message);

        let value = validInput.value;
        resolve(value);
      } catch (err) {
        reject(err);
      }
    });
  },
};

