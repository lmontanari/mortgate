var app = require('../app')
  , should = require('should')
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
