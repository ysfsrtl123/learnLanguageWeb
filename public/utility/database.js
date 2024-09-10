//Kendi MSsql veri tabanınız ile bağlanabilirsiniz yıldızlı alana veri tabanı bilgilerinizi girmeniz yeterlidir.
// veri tabanı sütun isimlerinin  sırasıyla id, word , answer  olması gerektiğini unutmayın. Bu şekilde  sadece veri tabanınızı bağlamanız programı çalıştıracaktır.

const mysql = require('mysql2');

const connection = mysql.createConnection({
<<<<<<< HEAD
    host: '****',
    user: '****',
    password: '****',
    database: '*****'
=======
   host:'localhost',
   user: 'root',
   database: '*****',
   password: '****'

>>>>>>> eafaa71722b1f45380985dd570e7781d8152875a
});

module.exports = connection.promise();
