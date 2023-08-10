import { 
    selectAllUsers, 
    insertUser,
    selectLastID    
} from "../model/DAO/userDAO"
var message = require('./modulo/config.ts')

export const mdlSelectAllUsers = async function () {
    interface Users  {
        status: Number,
        quantidade: Number,
        usuarios: Object    
    }

    let dadosUsers = await selectAllUsers()

    if (dadosUsers) {
        let dadosUsuarios: Users = {
            status: message.SUCCES_REQUEST.status,
            quantidade: dadosUsers.length,
            usuarios: dadosUsers
        }
        return dadosUsuarios
    } else {
        return message.ERROR_ITEM_NOT_FOUND
    }
}

export const mdlInsertUser = async (dadosUsers: any) => {
    
    interface User {
        message: string,
        status: Number,
        usuario: Object
    }

    if (dadosUsers.nome == '' || dadosUsers.nome == undefined || dadosUsers.length > 255 || 
        dadosUsers.tag_de_usuario == '' || dadosUsers.tag_de_usuario == undefined || dadosUsers > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS
    } else {
        let resultDadosUser = await insertUser(dadosUsers)

        if(resultDadosUser) {
            let novoUser = await selectLastID()

            let dadosUsers: User = {
                message: message.SUCCESS_CREATED_ITEM.message,
                status: message.SUCCESS_CREATED_ITEM.status,
                usuario: novoUser
            }

            return dadosUsers
        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    }
}