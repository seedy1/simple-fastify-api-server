// import {getCharacter, getCharacter} from "../controllers/character";
const characterC = require("../controllers/character");


const routes = [

    {
        method: 'GET',
        url: '/characters',
        handler: characterC.getCharacters
    },
    {
        method: 'GET',
        url: '/characters/:id',
        handler: characterC.getCharacter
      },
      {
        method: 'POST',
        url: '/characters',
        handler: characterC.addCharacter,
        // schema: documentation.addCharacterSchema
      },
      {
        method: 'PUT',
        url: '/characters/:id',
        handler: characterC.updateCharacter
      },
      {
        method: 'DELETE',
        url: '/characters/:id',
        handler: characterC.deleteCharacter
      }

];

module.exports = routes;
// export{
//     routes
// };