


const  mysql = require("mysql2")

const db = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : "123456789",
    database : "project_management"
})
// promise wrapper to enable async await with MYSQL
// https://medium.com/fullstackwebdev/a-guide-to-mysql-with-node-js-fc4f6abce33b
//db.query = util.promisify(db.query).bind(db);


module.exports = db