// import Fastify from "fastify";
// import mongoose from "mongoose";
// import {routes} from "./routes/character.js";
const fastify = require("fastify")({
    logger: true
  });

const mongoose = require("mongoose");
const routes = require("./routes/character");

// const fastify = Fastify({ logger: true}); 
const PORT = 3000;

// db
mongoose.connect("mongodb://127.0.0.1:27017/simplefastifyapi")
.then( ()=> console.log("connected to local mongo DB") ).catch(err => console.log(err));


// routes
routes.forEach((route, i)=>{
    fastify.route(route);
});


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
  };

  start();

