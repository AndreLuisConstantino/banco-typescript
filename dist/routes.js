"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import controllerUser from "./controller/userControler"
//import para as rotas
const routes = (0, express_1.Router)();
var message = require('./controller/modulo/config');
//import do cors
/*
    npm install cors
    npm install --save-dev @types/cors

*/
const cors_1 = __importDefault(require("cors"));
//import do body-parser
/*
    yarn add body-parser
    npm install --save @types/body-parser
*/
const bodyParser = require("body-parser");
//Permissões do cors
routes.use((request, response, next) => {
    //Define quem poderá acessar a API (* = Todos)
    response.header("Acess-Control-Allow-Origin", "*");
    //Define quais métodos serão utilizados na API
    response.header("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    //Atribui as permissões ao Cors
    routes.use((0, cors_1.default)());
    next();
});
const bodyParserJSON = bodyParser.json();
const userControler_1 = require("./controller/userControler");
routes.get("/usuario", (0, cors_1.default)(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield (0, userControler_1.selectAllUsers)();
    response.status(usuarios.status);
    response.json(usuarios);
}));
routes.get("/usuario/:id", (0, cors_1.default)(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    let id = request.params.id;
    let usuario = yield (0, userControler_1.selectUserById)(id);
    response.status(usuario.status);
    response.json(usuario);
}));
routes.post("/usuario", (0, cors_1.default)(), bodyParserJSON, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    let contentType = request.headers['content-type'];
    if (String(contentType).toLowerCase() == 'application/json') {
        let dadosBody = request.body;
        let resultDadosUser = yield (0, userControler_1.insertUser)(dadosBody);
        response.status(resultDadosUser.status);
        response.json(resultDadosUser);
    }
    else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE);
    }
}));
exports.default = routes;
