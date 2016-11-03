var app = require('../app')
  , request = require('supertest')(app);

  describe('Load main page', function(){
    it('Should return 200 when get /', function(done){
      request.get('/')
             .end(function(err, res){
               res.status.should.eql(200);
               done();
             });
    });
  });

  describe('Not exists page', function(){
    it('Should return 404 when get /asfgh', function(done){
      request.get('/asfgh')
             .end(function(err, res){
               res.status.should.eql(404);
               done();
             });
    });
  });

  // describe('Login', function(){
  //   it('Should go to /chat when logging in', function(done){
  //     var loginData = {usuario: {name: 'john', email: 'john@gmail.com'}};
  //     request.post('/api/chats')
  //            .send(loginData)
  //            .end(function(err, res){
  //              res.headers.location.should.eql('/chat');
  //              done();
  //            });
  //   });
  // });
