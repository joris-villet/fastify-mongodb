
const db = require('../db');

// Require user model
const User = require('../models/User');

// Require my validation schemas
const valid = require('../validations');


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

   // done() // Function to call when plugin is ready


   fastify.route({
      method: 'GET',
      path: '/api/auth/all',
      handler: async (req, reply) => await User.find()
   })


   done();

}
