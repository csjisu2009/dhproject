
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '10.32.145.215',
    user : 'root',
    password : 'anjun9988',
    port : '3306',
    database : 'tosil'
});

connection.connect();
connection.query('select * from t_pj_standard', function(err, rows, fileds){
    if(!err)
        console.log(rows);
    else
        console.log('Error!', err);
});

connection.end(); 