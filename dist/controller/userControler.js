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
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = exports.selectUserById = exports.selectAllUsers = void 0;
const userDAO_1 = require("../model/DAO/userDAO");
// var message = require('./modulo/config.ts')
const config_1 = require("./modulo/config");
const selectAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    let dadosUsers = yield (0, userDAO_1.mdlSelectAllUsers)();
    if (dadosUsers) {
        let dadosUsuarios = {
            status: config_1.SUCCES_REQUEST.status,
            quantidade: dadosUsers.length,
            usuarios: dadosUsers
        };
        return dadosUsuarios;
    }
    else {
        return config_1.ERROR_ITEM_NOT_FOUND;
    }
});
exports.selectAllUsers = selectAllUsers;
const selectUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (id == undefined || id == '' || isNaN(id)) {
        return config_1.ERROR_INVALID_ID;
    }
    else {
        let dadosUsuario = yield (0, userDAO_1.mldSelectUserById)(id);
        if (dadosUsuario) {
            let usuario = {
                status: config_1.SUCCES_REQUEST.status,
                usuario: dadosUsuario
            };
            return usuario;
        }
        else {
            return config_1.ERROR_ITEM_NOT_FOUND;
        }
    }
});
exports.selectUserById = selectUserById;
const insertUser = (dadosUsers) => __awaiter(void 0, void 0, void 0, function* () {
    if (dadosUsers.nome == '' || dadosUsers.nome == undefined || dadosUsers.length > 255 ||
        dadosUsers.tag_de_usuario == '' || dadosUsers.tag_de_usuario == undefined || dadosUsers > 255) {
        return config_1.ERROR_REQUIRED_FIELDS;
    }
    else {
        let resultDadosUser = yield (0, userDAO_1.mdlInsertUser)(dadosUsers);
        if (resultDadosUser) {
            let novoUser = yield (0, userDAO_1.mdlSelectLastID)();
            let dadosUsers = {
                message: config_1.SUCCESS_CREATED_ITEM.message,
                status: config_1.SUCCESS_CREATED_ITEM.status,
                usuario: novoUser
            };
            return dadosUsers;
        }
        else {
            return config_1.ERROR_INTERNAL_SERVER;
        }
    }
});
exports.insertUser = insertUser;
