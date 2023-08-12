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
exports.mdlSelectLastID = exports.mdlInsertUser = exports.mldSelectUserById = exports.mdlSelectAllUsers = void 0;
// //Import da biblioteca do prisma client
var { PrismaClient } = require("@prisma/client");
var prisma = new PrismaClient();
const mdlSelectAllUsers = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = `select * from tbl_usuario`;
        let resultUser = yield prisma.$queryRawUnsafe(sql);
        if (resultUser.length > 0) {
            return resultUser;
        }
        else {
            return false;
        }
    });
};
exports.mdlSelectAllUsers = mdlSelectAllUsers;
const mldSelectUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `select * from tbl_usuario where id = ${id}`;
    let resultUser = yield prisma.$queryRawUnsafe(sql);
    if (resultUser.length > 0) {
        return resultUser;
    }
    else {
        return false;
    }
});
exports.mldSelectUserById = mldSelectUserById;
const mdlInsertUser = (dadosUser) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `insert into tbl_usuario 
                            (
                            nome, 
                            tag_de_usuario
                            ) 
                            values (
                                '${dadosUser.nome}', 
                                '${dadosUser.tag_de_usuario}'
                                )`;
    let resultStatus = yield prisma.$executeRawUnsafe(sql);
    if (resultStatus) {
        return true;
    }
    else {
        return false;
    }
});
exports.mdlInsertUser = mdlInsertUser;
const mdlSelectLastID = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = `select * from tbl_usuario order by id desc limit 1;`;
        let rsAluno = yield prisma.$queryRawUnsafe(sql);
        if (rsAluno.length > 0) {
            return rsAluno;
        }
        else {
            return false;
        }
    });
};
exports.mdlSelectLastID = mdlSelectLastID;
