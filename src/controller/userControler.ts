import {
  mdlInsertUser,
  mdlSelectAllUsers,
  mdlSelectLastID,
  mldSelectUserById,
  mdlSelectUserByTag,
  mdlUpdateUser,
  mdlDeleteUser
} from "../model/DAO/userDAO";

// var message = require('./modulo/config.ts')

import {
  ERROR_REQUIRED_FIELDS,
  ERROR_MISTAKE_IN_THE_FILDS,
  ERROR_INTERNAL_SERVER,
  ERROR_INVALID_CONTENT_TYPE,
  ERROR_INVALID_ID,
  ERROR_DELETED_ITEM,
  ERROR_ITEM_NOT_FOUND,
  SUCCESS_CREATED_ITEM,
  SUCCESS_UPDATED_ITEM,
  SUCCESS_DELETED_ITEM,
  SUCCES_REQUEST,
  ERROR_INVALID_TAG,
  ERROR_EXISTING_TAG,
} from "./modulo/config";

export const selectAllUsers = async () => {
  interface Users {
    status: number;
    quantidade: number;
    usuarios: Object;
  }

  let dadosUsers = await mdlSelectAllUsers();

  if (dadosUsers) {
    let dadosUsuarios: Users = {
      status: SUCCES_REQUEST.status,
      quantidade: dadosUsers.length,
      usuarios: dadosUsers,
    };
    return dadosUsuarios;
  } else {
    return ERROR_ITEM_NOT_FOUND;
  }
};

export const selectUserById = async (id: any) => {
  if (id == undefined || id == "" || isNaN(id)) {
    return ERROR_INVALID_ID;
  } else {
    interface User {
      status: number;
      usuario: Object;
    }

    let dadosUsuario = await mldSelectUserById(id);

    if (dadosUsuario) {
      let usuario: User = {
        status: SUCCES_REQUEST.status,
        usuario: dadosUsuario,
      };
      return usuario;
    } else {
      return ERROR_ITEM_NOT_FOUND;
    }
  }
};

export const insertUser = async (dadosUsers: any) => {
  interface User {
    message: string;
    status: number;
    usuario: Object;
  }

  if (
    dadosUsers.nome == "" ||
    dadosUsers.nome == undefined ||
    dadosUsers.length > 255 ||
    dadosUsers.tag_de_usuario == "" ||
    dadosUsers.tag_de_usuario == undefined ||
    dadosUsers > 255
  ) {
    return ERROR_REQUIRED_FIELDS;
  } else {
    let resultTag = selectUserByTag(dadosUsers.tag_de_usuario);

    if ((await resultTag).status == 200) {
      return ERROR_EXISTING_TAG;
    } else {
      let resultDadosUser = await mdlInsertUser(dadosUsers);

      if (resultDadosUser) {
        let novoUser = await mdlSelectLastID();

        let dadosUsers: User = {
          message: SUCCESS_CREATED_ITEM.message,
          status: SUCCESS_CREATED_ITEM.status,
          usuario: novoUser,
        };

        return dadosUsers;
      } else {
        return ERROR_INTERNAL_SERVER;
      }
    }
  }
};

export const selectUserByTag = async (tag: string) => {
  if (tag == "" || tag == undefined || tag.length > 255) {
    return ERROR_INVALID_TAG;
  } else {
    interface User {
      status: number;
      usuario: Object;
    }

    let dadosUsuario = await mdlSelectUserByTag(tag);

    if (dadosUsuario) {
      let usuario: User = {
        status: SUCCES_REQUEST.status,
        usuario: dadosUsuario,
      };
      return usuario;
    } else {
      return ERROR_ITEM_NOT_FOUND;
    }
  }
};

export const updateUser = async (dadosUser: any, id: string) => {
  interface User {
    message: string;
    status: number;
    usuario: Object;
  }

  if (
    dadosUser.nome == "" ||
    dadosUser.nome == undefined ||
    dadosUser.length > 255 ||
    dadosUser.tag_de_usuario == "" ||
    dadosUser.tag_de_usuario == undefined ||
    dadosUser.length > 255
  ) {
    return ERROR_REQUIRED_FIELDS;
  } else if (id == undefined || id == "" || isNaN(Number(id))) {
    return ERROR_INVALID_ID;
  } else {
    dadosUser.id = Number(id);

    let resultId = await selectUserById(Number(id));

    if (resultId) {
      let resultDadosUser = await mdlUpdateUser(dadosUser);

      if (resultDadosUser) {
        let novoUser = await selectUserById(Number(id));
        let usuario: User = {
          message: SUCCESS_UPDATED_ITEM.message,
          status: SUCCESS_UPDATED_ITEM.status,
          usuario: novoUser,
        };
        return usuario;
      } else {
        return ERROR_INTERNAL_SERVER;
      }
    } else {
      return ERROR_ITEM_NOT_FOUND;
    }
  }
};


export const deleteUser = async (id: number) => {
    
    if (id == null || id == undefined || String(id) == '' || isNaN(id)) {
        return ERROR_REQUIRED_FIELDS
    } else {
        let idUser = await selectUserById(id)

        if (idUser) {
            let result = await mdlDeleteUser(id)

            if (result) {
                return SUCCESS_DELETED_ITEM
            } else {
                return ERROR_DELETED_ITEM
            }

        } else {
            return ERROR_ITEM_NOT_FOUND
        }
    }
}