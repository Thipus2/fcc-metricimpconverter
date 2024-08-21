const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    this.timeout(5000);
    test('Convert a valid input such as 10L',function(done){
        chai.
        request(server)
        .keepOpen()
        .get('/api/convert?input=10L')
        .end(function(err,res){
            assert.equal(res.status,200);
            assert.equal(res.body.string,"10 liters converts to 2.64172 gallons")
            done();
        })
    });
    test('Convert an invalid input such as 32g',function(done){
        chai.
        request(server)
        .keepOpen()
        .get('/api/convert?input=32g')
        .end(function(err,res){
            assert.equal(res.status,200);
            assert.equal(res.text,"invalid unit")
            done();
        })
    });
    test('Convert an invalid number such as 3/7.2/4kg',function(done){
        chai.
        request(server)
        .keepOpen()
        .get('/api/convert?input=3/7.2/4kg')
        .end(function(err,res){
            assert.equal(res.status,200);
            assert.equal(res.text,"invalid number")
            done();
        })
    });
    test('CConvert an invalid number AND unit such as 3/7.2/4kilomegagram',function(done){
        chai.
        request(server)
        .keepOpen()
        .get('/api/convert?input=3/7.2/4kilomegagram')
        .end(function(err,res){
            assert.equal(res.status,200);
            assert.equal(res.text,"invalid number and unit")
            done();
        })
    });
    test('Convert with no number such as kg',function(done){
        chai.
        request(server)
        .keepOpen()
        .get('/api/convert?input=kg')
        .end(function(err,res){
            assert.equal(res.status,200);
            assert.equal(res.body.string,"1 kilograms converts to 2.20462 pounds")
            done();
        })
    });
});



/*
Convert a valid input such as 10L: GET request to /api/convert.
Convert an invalid input such as 32g: GET request to /api/convert.
Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
Convert with no number such as kg: GET request to /api/convert
*/
/*
suite('Functional Tests', function() {
    test('Convert a valid input such as 10L',function(){
        assert.equal('10 liters converts to 2.64172 gallons',convertHandler.getString(10,'L',parseFloat((10/3.78541).toFixed(5)),'gal'),'string OK')
    });
    test('Convert an invalid input such as 32g:',function(){
        assert.equal(10,convertHandler.getString('10'),'string OK')
    });
    test('Convert an invalid number such as 3/7.2/4kg',function(){
        assert.equal(10,convertHandler.getString('10'),'string OK')
    });
    test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram',function(){
        assert.equal(10,convertHandler.getString('10'),'string OK')
    });
    test('Convert with no number such as kg',function(){
        assert.equal(10,convertHandler.getString('10'),'string OK')
    });
});
*/
