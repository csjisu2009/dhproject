module.exports =  function(app, fs)
{
   
   app.get('/',function(req,res){
      //투입계획 OL보고용
      res.render('index', {
          title: "MY HOMEPAGE_tosil",
          length: 5
      })
   });


   app.get('/index2',function(req,res){
      //Mega TB 영역별 상세
      res.render('index2', {
          title: "MY HOMEPAGE_tosil",
          length: 5
      })
   });
   app.get('/index3',function(req,res){
      //입력
      res.render('index3', {
          title: "MY HOMEPAGE_tosil",
          length: 5
      })
   });

   app.get('/input1',function(req,res){
      //인원입력
      res.render('input1', {
          title: "MY HOMEPAGE_tosil",
          length: 5
      })
   });


   app.get('/list', function (req, res) {
      fs.readFile( __dirname + "/../data/" + "user.json", 'utf8', function (err, data) {
         console.log( data );
         res.end( data );
      });
   })

   app.get('/getUser/:username', function(req, res){
      fs.readFile( __dirname + "/../data/user.json", 'utf8', function (err, data) {
           var users = JSON.parse(data);
           res.json(users[req.params.username]);

      });
   });
   
   var mysql = require('mysql');
   var connection = mysql.createConnection({
       host : '10.32.145.215',
       user : 'root',
       password : 'anjun9988',
       port : '3306',
       database : 'tosil'
   });
    
}