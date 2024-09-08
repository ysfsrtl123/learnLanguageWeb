const mysql = require('mysql2');

const connection = mysql.createConnection({
   host:'localhost',
   user: 'root',
   database: '*****',
   password: '****'

});

module.exports = connection.promise();
