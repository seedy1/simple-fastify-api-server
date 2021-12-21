// import boom from "boom";
// import Character from "../models/characters";
const boom = require("boom");
const Character = require("../models/characters");

exports.getCharacters = async (req, reply) =>{
    try{

        const characters = await Character.find();
        return characters;

    }catch(err){
        throw boom.boomify(err);

    }
};

exports.getCharacter = async (req, reply) =>{
    try {

      const id = req.params.id;
      const simgleCharacter = await Character.findById(id);
      return singleCharacter;

    } catch (err) {
      throw boom.boomify(err);
    }
  };
  

exports.addCharacter = async (req, reply) => {
    try {

        // const character = new Character(req.body);
        const character = new Character({...req.body});
        return character.save();

    } catch (err) {
      throw boom.boomify(err);
    }

};
  

exports.updateCharacter = async (req, reply) => {
    try {

      const id = req.params.id;
      const character = req.body;
      const { ...updateData } = character;
      const update = await Character.findByIdAndUpdate(id, updateData, { new: true });
      
      return update;

    } catch (err) {
      throw boom.boomify(err);
    }
  };
  

exports.deleteCharacter = async (req, reply) => {
    try {

      const id = req.params.id;
      const character = await Character.findByIdAndRemove(id);
      return character;

    } catch (err) {
      throw boom.boomify(err);
    }
  };

