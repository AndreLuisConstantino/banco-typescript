"use strict";
/******************************************************************************
* Objetivo: Arquivo responsável por padrozinar as mensagens de ERRO, SUCESSO, Funções, variáveis para o projeto
* Data: 28/04/2023
* Autor: André
* Versão: 1.1
/******************************** MENSAGENS DE ERRO **********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUCCES_REQUEST = exports.SUCCESS_DELETED_ITEM = exports.SUCCESS_UPDATED_ITEM = exports.SUCCESS_CREATED_ITEM = exports.ERROR_ITEM_NOT_FOUND = exports.ERROR_DELETED_ITEM = exports.ERROR_INVALID_ID = exports.ERROR_INVALID_CONTENT_TYPE = exports.ERROR_INTERNAL_SERVER = exports.ERROR_MISTAKE_IN_THE_FILDS = exports.ERROR_REQUIRED_FIELDS = void 0;
const ERROR_REQUIRED_FIELDS = { status: 400, message: 'Campos obrigatórios não foram preenchidos.' };
exports.ERROR_REQUIRED_FIELDS = ERROR_REQUIRED_FIELDS;
const ERROR_MISTAKE_IN_THE_FILDS = { status: 400, message: 'Campos obrigatórios foram preenchidos errado.' };
exports.ERROR_MISTAKE_IN_THE_FILDS = ERROR_MISTAKE_IN_THE_FILDS;
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Devido a um erro interno no servidor não possivel processar a requisição.' };
exports.ERROR_INTERNAL_SERVER = ERROR_INTERNAL_SERVER;
const ERROR_INVALID_CONTENT_TYPE = { status: 415, message: `O tipo de mídia no tipo de conteúdo da solicitação não é suportado pelo servidor. [application/json]` };
exports.ERROR_INVALID_CONTENT_TYPE = ERROR_INVALID_CONTENT_TYPE;
const ERROR_INVALID_ID = { status: 400, message: 'O ID informado na requisição não é válido ou não foi encaminhado.' };
exports.ERROR_INVALID_ID = ERROR_INVALID_ID;
const ERROR_DELETED_ITEM = { status: 404, message: 'O item não pode ser excluido, pois ele não foi encontrado' };
exports.ERROR_DELETED_ITEM = ERROR_DELETED_ITEM;
const ERROR_ITEM_NOT_FOUND = { status: 404, message: 'O item não pode ser encontrado na requisição.' };
exports.ERROR_ITEM_NOT_FOUND = ERROR_ITEM_NOT_FOUND;
/******************************** MENSAGENS DE SUCESSO **********************************************/
const SUCCESS_CREATED_ITEM = { status: 201, message: 'Item criado com sucesso.' };
exports.SUCCESS_CREATED_ITEM = SUCCESS_CREATED_ITEM;
const SUCCESS_UPDATED_ITEM = { status: 200, message: 'Item atualizado com sucesso.' };
exports.SUCCESS_UPDATED_ITEM = SUCCESS_UPDATED_ITEM;
const SUCCESS_DELETED_ITEM = { status: 200, message: 'Item excluido com sucesso.' };
exports.SUCCESS_DELETED_ITEM = SUCCESS_DELETED_ITEM;
const SUCCES_REQUEST = { status: 200, message: 'Requisição bem secedida' };
exports.SUCCES_REQUEST = SUCCES_REQUEST;
// module.exports = {
//     ERROR_REQUIRED_FIELDS,
//     ERROR_INTERNAL_SERVER,
//     SUCCESS_CREATED_ITEM,
//     ERROR_MISTAKE_IN_THE_FILDS,
//     ERROR_INVALID_ID,
//     SUCCESS_UPDATED_ITEM,
//     ERROR_INVALID_CONTENT_TYPE,
//     SUCCESS_DELETED_ITEM,
//     ERROR_DELETED_ITEM,
//     ERROR_ITEM_NOT_FOUND,
//     SUCCES_REQUEST
// }
