
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '10.32.145.215',
    user : 'root01',
    password : 'root01',
    port : '3306',
    database : 'tosil'
});

connection.connect();

connection.query('select distinct bumun_name from project_info;', function(err, rows, fileds){
    if(!err)
        console.log(rows);
    else
        console.log('Error!', err);
});

connection.end(); 