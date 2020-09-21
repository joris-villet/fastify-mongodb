const Joi = require('joi');

module.exports = {

   userSchema: Joi.object({
      firstname: Joi.string().min(3).max(20).required(),
      lastname: Joi.string().min(3).max(20).required(),
      birthdate: Joi.date().required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr', 'io']}}).required(),
      password: Joi.string().min(8).required(),
      repeatPassword: Joi.ref('password')
   })

}

