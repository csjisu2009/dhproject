module.exports =  function(app, fs)
{
   app.get('/',function(req,res){
      res.render('index', {
          title: "MY HOMEPAGE_tosil",
          length: 5
      })
   });
<<<<<<< HEAD

   app.get('/index2',function(req,res){
      res.render('index2', {
          title: "MY HOMEPAGE_tosil",
          length: 5
      })
   });

=======
``
>>>>>>> bb1986d2c68fac88d552e71ad1bc47e588a67a8b
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



}