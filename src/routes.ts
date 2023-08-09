import { Router } from "express";
// import controllerUser from "./controller/userControler"

//import para as rotas
const routes = Router();

//import do cors
/* 
    yarn add cors
*/
const cors = require('cors')

//import do body-parser
/*
    yarn add body-parser
*/
const bodyParser = require('body-parser')

//Permissões do cors
routes.use((request, response, next) => {
    //Define quem poderá acessar a API (* = Todos)
    response.header('Acess-Control-Allow-Origin', '*')
    //Define quais métodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao Cors
    routes.use(cors())

    next()
})

const bodyParserJSON = bodyParser.json()

var controllerUser = require('./controller/userControler.ts')

routes.get('/usuario', (request, response) => {
    
    const varTeste = controllerUser.testeFuncao('nome teste', 1)

    response.json(varTeste)
})


export default routes