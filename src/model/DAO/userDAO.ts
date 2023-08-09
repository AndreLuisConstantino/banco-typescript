//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient()

const selectAllUsers = async function () {
    
    let sql = `select * from tbl_usuario`

    let resultUser = await prisma.$queryRawUnsafe()

    if (resultUser.length > 0) 
        return resultUser
    else
        return false
}