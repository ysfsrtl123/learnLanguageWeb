//Kendi MSsql veri tabanınız ile bağlanabilirsiniz yıldızlı alana veri tabanı bilgilerinizi girmeniz yeterlidir.
// veri tabanı sütun isimlerinin  sırasıyla id, word , answer  olması gerektiğini unutmayın. Bu şekilde  sadece veri tabanınızı bağlamanız programı çalıştıracaktır.

const mysql = require('mysql2');

const connection = mysql.createConnection({
    
    host: '****',
    user: '****',
    password: '****',
    database: '*****'
});
module.exports = connection.promise();
