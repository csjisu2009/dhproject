module.exports =  function(app, fs)
{
   var mysql = require('mysql');
   var conn = mysql.createConnection({ // mysql과 connection하는 부분
      host : '10.32.145.215',
      user : 'root01',
      password : 'root01',
      port : '3306',
      database : 'tosil',
      multipleStatements: true
  });
   
   app.get('/',function(req,res){
      //투입계획 OL보고용
      res.render('index', {
          title: "MY HOMEPAGE_tosil",
          length: 5
      })
   });

   app.get('/project',function(req,res){
      //전체 프로젝트 조회
      var sql = 'select distinct * from project_info;'; 
      conn.query(sql, function(err, project, fields){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error')
        }
          res.render('project', { project : project }); 
      });
   });


   app.get('/index2',function(req,res){
      //Mega TB 영역별 상세
      var sql = 'select distinct c_bumun_name from bumun;'+'select distinct domain_name from project_info where megaC="Y";'+
      'select distinct bumun_name from project_info where megaC="Y";';
      conn.query(sql, function(err,project, fields){
         if(err){
            console.log(err);
            res.status(500).send('Internal Server Error')
         }
         res.render('index2', { project : project }); 
      })
   });

   app.get('/index3', function(req, res){ 
      var sql = 'select distinct bumun_name from project_info;'+'select distinct domain_name from project_info;' 
      conn.query(sql, function(err, results, fields){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error')
        }
          res.render('index3', { results: results }); 
      });
  });

  app.get('/info_detail', function(req, res){
     //투입사업팀?
         var params = [req.query.id];
         console.log(req.query.id);
         console.log(req.params.id);
         var sql = "select * from profile_info i,  project_input_info p where i.profile_index = p.profile_index and pj_name = ?;"
         conn.query(sql,params, function(err, project, fields){
           if(err){
             console.log(err);
             res.status(500).send('Internal Server Error')
           }
             res.render('info_detail', { project : project }); 
         });
   });



  app.post('/index3', function(req, res){
   var pj_name = req.body.pj_name;				
   var bumun_name = req.body.bumun_name;
   var megaC = req.body.megaC;
   var domain_name = req.body.domain_name;
   var sql = 'INSERT INTO project_info (bumun_name, megaC, pj_name, domain_name) VALUES(?, ?, ?,?)';
   var params = [bumun_name, megaC,pj_name,domain_name ];
   conn.query(sql, params, function(err, result, fields){ 
       if(err) {
         console.log(err); 
         res.status(500).send('Internal Server Error');
       }
       console.log('The file has been saved!');
       res.redirect('/project/'+result.insertId);
       //새로운 데이터가 insert될때, 자동으로 생기는 id가 있는데, query 함수의 두번째 인자인 result 객체에서 insertId라는 키로 그 값인 id를 찾을 수 있다. 그것을 통하여 새로 생긴 데이터의 화면을 바로 띄워줄 수 있다.
   });
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
 
}