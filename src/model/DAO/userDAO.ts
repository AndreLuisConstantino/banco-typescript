// //Import da biblioteca do prisma client
var { PrismaClient } = require("@prisma/client");

var prisma = new PrismaClient();

export const mdlSelectAllUsers = async function () {
  let sql = `select * from tbl_usuario`;

  let resultUser = await prisma.$queryRawUnsafe(sql);

  if (resultUser.length > 0) {
    return resultUser;
  } else {
    return false;
  }
};

export const mldSelectUserById = async (id: any) => {
  let sql = `select * from tbl_usuario where id = ${id}`;

  let resultUser = await prisma.$queryRawUnsafe(sql);

  if (resultUser.length > 0) {
    return resultUser;
  } else {
    return false;
  }
};

export const mdlSelectUserByTag = async (tag: string) => {
  let sql = `select * from tbl_usuario where tag_de_usuario = '${tag}'`;

  let resultUser = await prisma.$queryRawUnsafe(sql);

  if (resultUser.length > 0) {
    return resultUser;
  } else {
    return false;
  }
};

export const mdlInsertUser = async (dadosUser: any) => {
  ("");
  let sql = `insert into tbl_usuario 
                            (
                            nome, 
                            tag_de_usuario
                            ) 
                            values (
                                '${dadosUser.nome}', 
                                '${dadosUser.tag_de_usuario}'
                                )`;

  let resultStatus = await prisma.$executeRawUnsafe(sql);

  if (resultStatus) {
    return true;
  } else {
    return false;
  }
};

export const mdlUpdateUser = async (dadosUser: any) => {
  let sql = `update tbl_usuario set 
                                nome = '${dadosUser.nome}',
                                tag_de_usuario = '${dadosUser.tag_de_usuario}'

              where id = ${dadosUser.id}
                                `;

  console.log(sql);
  

  let resultStatus = await prisma.$executeRawUnsafe(sql);

  if (resultStatus) {
    return true;
  } else {
    return false;
  }
};

export const mdlDeleteUser = async (id: number) => {
  
  let sql = `delete from tbl_usuario where id = ${id}`

  let resultStatus = await prisma.$executeRawUnsafe(sql)

  if (resultStatus)
    return  true
  else 
    return false
}

export const mdlSelectLastID = async function () {
  let sql = `select * from tbl_usuario order by id desc limit 1;`;

  let rsAluno = await prisma.$queryRawUnsafe(sql);

  if (rsAluno.length > 0) {
    return rsAluno;
  } else {
    return false;
  }
};
