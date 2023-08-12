import { Router } from "express";
// import controllerUser from "./controller/userControler"

//import para as rotas
const routes = Router();
var message = require("./controller/modulo/config");

//import do cors
/* 
    npm install cors
    npm install --save-dev @types/cors

*/
import cors from "cors";

//import do body-parser
/*
    yarn add body-parser
    npm install --save @types/body-parser
*/

import bodyParser = require("body-parser");

//Permissões do cors
routes.use((request, response, next) => {
  //Define quem poderá acessar a API (* = Todos)
  response.header("Acess-Control-Allow-Origin", "*");
  //Define quais métodos serão utilizados na API
  response.header(
    "Acess-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  //Atribui as permissões ao Cors
  routes.use(cors());

  next();
});

const bodyParserJSON = bodyParser.json();

import {
  selectAllUsers,
  insertUser,
  selectUserById,
  selectUserByTag,
  updateUser,
} from "./controller/userControler";

routes.get("/usuario", cors(), async (request, response): Promise<void> => {
  let tagDeUsuario = request.query.tag;

  if (tagDeUsuario != undefined) {
    let usuario = await selectUserByTag(String(tagDeUsuario));

    response.status(usuario.status);
    response.json(usuario);
  } else {
    const usuarios = await selectAllUsers();

    response.status(usuarios.status);
    response.json(usuarios);
  }
});

routes.get("/usuario/:id", cors(), async (request, response): Promise<void> => {
  let id = request.params.id;

  let usuario = await selectUserById(id);

  response.status(usuario.status);
  response.json(usuario);
});

// routes.get("/usuario/:tag", cors(),async (request, response): Promise<void> => {
//     let tagDeUsuario = request.params.tag

//     let usuario = await selectUserByTag(tagDeUsuario)

//     response.status(usuario.status)
//     response.json(usuario)
// })

routes.post(
  "/usuario",
  cors(),
  bodyParserJSON,
  async (request, response): Promise<void> => {
    let contentType = request.headers["content-type"];

    if (String(contentType).toLowerCase() == "application/json") {
      let dadosBody = request.body;

      let resultDadosUser = await insertUser(dadosBody);

      response.status(resultDadosUser.status);
      response.json(resultDadosUser);
    } else {
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
      response.json(message.ERROR_INVALID_CONTENT_TYPE);
    }
  }
);

routes.put("/usuario/:id", cors(), bodyParserJSON, async (request, response): Promise<void> => {
    let contentType = request.headers["content-type"];

    if (String(contentType).toLowerCase() == "application/json") {
        let id = request.params.id
    
      let dadosBody = request.body;

      let resultDadosUser = await updateUser(dadosBody, id);

      response.status(resultDadosUser.status);
      response.json(resultDadosUser);
    } else {
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
      response.json(message.ERROR_INVALID_CONTENT_TYPE);
    }
  }
);

export default routes;
