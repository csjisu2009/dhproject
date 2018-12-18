var express = require('express');
var router = express.Router();

var mysql = require('mysql');

router.get('/',function (req,res,next){

  var connection = mysql.createConnection({
    host : '10.32.145.215',
    user : 'root01',
    password : 'root01',
    port : '3306',
    database : 'tosil'
  });

  connection.connect();
  var sql = 'SELECT * from t_pj_standard';
  connection.query(sql, function (err, rows, fields) {
    connection.end();
    if (!err) {
      console.log(rows);
      console.log(fields);
      var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
          'fields : ' + JSON.stringify(fields);
      res.send(result);
  } else {
      console.log('query error : ' + err);
      res.send(err);
  }
  });
});

module.exports = router;
 

 
 