const mysql = require('mysql2');

const connection = mysql.createConnection({
   host:'localhost',
   user: 'root',
   database: 'nodeapp',
   password: 'memet1976'

});

module.exports = connection.promise();