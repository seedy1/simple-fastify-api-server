import Fastify from "fastify";
const fastify = Fastify({ logger: true}); 

const PORT = 3000;

fastify.get('/', async (req, reply)=>{
    return {hello: "world"}
});

const start = async ()=>{

    try {
      await fastify.listen(PORT);
      fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }

  start();

