const test = require('supertest');
const app = require('../server');

describe("Get /", ()=> {
    it('respond with Tester tester', (done) => {
        test(app).get('/test').expect('Tester tester via github actions', done);
    })
});