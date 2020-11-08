const test = require('supertest');
const { request } = require('../../server');
const app = require('../../server');
const exprext = require('chai').assert;

describe("Get /", ()=> {
    it('respond with Tester tester', (done) => {
        test(app).get('/test').expect('Tester tester via github actions', done);
    })
});


describe('render test', function(done) {
    it('should return with 200 (ok)', function() {
        
        test(app).get('/test/render').expect(200 ).end((err, res)=> {
        })
    })
})

describe('render test', function(done) {
    it('should return the rendered test with main layout', function() {    
        test(app).get(('/test/render'), function(req, res) {
            assert()
        })  
    })
})