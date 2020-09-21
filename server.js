if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });


// Run the server!
const start = async () => {

  try {

    // Module to make an equivalent of express.urlencoded
    await fastify.register(require('fastify-formbody'))

    // require my route about users
    await fastify.register(require('./app/routes/users.routes'));

    await fastify.listen(process.env.PORT || 5555);
    //fastify.log.info(`${fastify.server.address().port}`); Already logged by {logger: true}
   
  } 
  
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }

}

start()







