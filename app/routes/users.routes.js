
const db = require('../db');

// Require user model
const User = require('../models/User');

// Require my validation schemas
const valid = require('../validations');

const bcrypt = require('bcrypt');

// User plugin
module.exports = (fastify, options, done) => {

   // fastify.get('/', _ => ("hello world"));
 
   // fastify.get('/users', async _ => await User.findAll());

   // fastify.post('/user', async (req, reply) => {
      
   //    // Check body form with schemas in validations module
   //    await valid.userSchema.validateAsync(req.body);

   //    // Create new user
   //    const newUser = await User.create(req.body);
   //    return reply.send({newUser});
   // });

   // done() 


   fastify.route({
      method: 'GET',
      path: '/api/auth/all',
      handler: async (req, reply) => await User.find()
   })

   fastify.route({
      method: 'POST',
      path: '/api/auth/user',
      handler: async (req, reply) => {

         //Check body form with schemas in validations module
         await valid.userSchema.validateAsync(req.body);

         // Password crypted
         req.body.password = bcrypt.hashSync(req.body.password, 10);

         // Create new user
         const newUser = await User.create(req.body);
         reply.send({newUser});

      }
   })


   done(); // Function to call when plugin is ready

}
