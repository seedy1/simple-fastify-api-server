import Fastify from "fastify";
import mongoose from "mongoose";


const fastify = Fastify({ logger: true}); 

// db
mongoose.connect("mongodb://127.0.0.1:27017/simplefastifyapi")
.then( ()=> console.log("connected to local mongo DB") ).catch(err => console.log(err));


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

