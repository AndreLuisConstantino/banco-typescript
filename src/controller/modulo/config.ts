/****************************************************************************** 
* Objetivo: Arquivo responsável por padrozinar as mensagens de ERRO, SUCESSO, Funções, variáveis para o projeto
* Data: 28/04/2023
* Autor: André
* Versão: 1.1
/******************************** MENSAGENS DE ERRO **********************************************/

const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'}

const ERROR_MISTAKE_IN_THE_FILDS = {status: 400, message: 'Campos obrigatórios foram preenchidos errado.'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor não possivel processar a requisição.'}

const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: `O tipo de mídia no tipo de conteúdo da solicitação não é suportado pelo servidor. [application/json]`}

const ERROR_INVALID_ID = {status: 400, message: 'O ID informado na requisição não é válido ou não foi encaminhado.'}

const ERROR_INVALID_TAG = {status: 400, message: 'A Tag enviada na requisição não é válida ou não foi informada.'}

const ERROR_DELETED_ITEM = {status: 404, message: 'O item não pode ser excluido, pois ele não foi encontrado'}

const ERROR_ITEM_NOT_FOUND = {status: 404, message: 'O item não pode ser encontrado na requisição.'} 

const ERROR_EXISTING_TAG = {status: 405, message: 'A tag enviada já é usada por outro usuário'} 

/******************************** MENSAGENS DE SUCESSO **********************************************/
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso.'}

const SUCCESS_UPDATED_ITEM = {status: 200, message: 'Item atualizado com sucesso.'}

const SUCCESS_DELETED_ITEM = {status: 200, message: 'Item excluido com sucesso.'}

const SUCCES_REQUEST = {status: 200, message: 'Requisição bem secedida'}

export { 
    ERROR_REQUIRED_FIELDS,
    ERROR_MISTAKE_IN_THE_FILDS,
    ERROR_INTERNAL_SERVER, 
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_INVALID_ID,
    ERROR_DELETED_ITEM,
    ERROR_ITEM_NOT_FOUND,
    ERROR_INVALID_TAG,
    SUCCESS_CREATED_ITEM,
    SUCCESS_UPDATED_ITEM,
    SUCCESS_DELETED_ITEM,
    SUCCES_REQUEST,
    ERROR_EXISTING_TAG
}


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