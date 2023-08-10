import { Router } from "express";
// import controllerUser from "./controller/userControler"

//import para as rotas
const routes = Router();
var message = require('./controller/modulo/config.ts')

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
    mdlSelectAllUsers,
    mdlInsertUser
} from "./controller/userControler";

routes.get("/usuario", cors(), async (request, response): Promise<void> => {
  const usuarios = await mdlSelectAllUsers();

  response.status(usuarios.status);
  response.json(usuarios);
});



routes.post("/usuario", cors(), bodyParserJSON, async (request, response): Promise<void> => {
    let contentType = request.headers['content-type']

    if (String(contentType).toLowerCase() == 'application/json'){
        let dadosBody = request.body

        let resultDadosUser = await mdlInsertUser(dadosBody)

        response.status(resultDadosUser.status)
        response.json(resultDadosUser)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }
});

export default routes;
