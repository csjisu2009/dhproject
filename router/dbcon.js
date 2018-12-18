
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '10.32.145.215',
    user : 'root',
    password : 'anjun9988',
    port : '3306',
    database : 'tosil'
});

connection.connect();

var sql = 'SELECT * from t_pj_standard';
connection.query(sql, function (err, rows, fields) {
  if (err) console.log(err);
  console.log('rows', rows); //row는 배열이다.
  console.log('fields', fields); //fields는 컬럼을 의미한다.
});

// 외부 코드
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var mysql = require('mysql');		// node-mysql을 install하고 모듈을 불러와야한다.
var conn = mysql.createConnection({ // mysql과 connection하는 부분
    host     : '10.32.145.215',
    user     : 'root',
    password : 'anjun9988',
    port : '3306',
    database : 'tosil'
});
 
//-----------------------화면 뿌리기 -------------------------

app.get(['/topic/:id/edit'], function(req, res){// 수정기능
    var sql = 'SELECT id,title FROM topic';	// 일단, 글 목록을 불러온다.(edit페이지에도 글목록은 항상 존재)
    conn.query(sql, function(err, topics, fields){
      var id = req.params.id; // request받은 id값
      if(id){
        var sql = 'SELECT * FROM topic WHERE id=?';// id값을 통하여 수정하려고 하는 특정 데이터만 불러온다.
        conn.query(sql, [id], function(err, topic, fields){//[id] : 사용자로부터 받은 id
          if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            res.render('edit', {topics : topics, topic : topic[0] });//topic은 배열안에 담긴 객체로 들어오기 때문에, topic[0]으로 데이터를 객체만 전달한다.(전달한 데이터를 통해서 현재 수정하려고 하는 데이터를 화면에 뿌려준다.)
          }
        });
      } else {//id가 없을 경우 반환한다.
        console.log(err);
        res.send('There is no id.');
      }
    });
}); 

app.listen(3000, function(){
    console.log("Connected localhost:3000");
});