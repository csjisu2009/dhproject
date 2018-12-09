var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');//express-session access cookie directly, cookie-parser is useless
var fs = require("fs")//use fs module in order to open files

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
 console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
 secret: '@#@$MYSIGN#@$#$',//cookie 임의 변조 방지 sign값
 resave: false,//session을 언제나 저장할 지 정하는 값(express-session documentation에서 false로 권장)
 saveUninitialized: true// uninitialized session: 새로 생겼지만 변경되지 않은 세션(express-session documentation에서 true로 권장), 
}));


var router = require('./router/main')(app, fs);//add fs as parameter in order to use fs module in router

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'anjun9988',
    port : 3306,
    database : 'tosil'
});

connection.connect();
connection.query('select * from t_pj_standard;' );
connection.end();