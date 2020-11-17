const app = require('../../server');
const chai = require('chai');
const chaihttp = require('chai-http');

const{ expect } = chai;
chai.use(chaihttp);

describe("Tester!", () =>{
    it('test example json', done =>{
        chai.request(app)
        .get('/test').end((err, res)=>{
            expect(res).to.have.status(200);
            expect(res.body.status).to.equals('Tester succes')
            expect(res.body.message).to.equals('Welcome to testing route!');
            done();
        })
    })
});

describe('Tester render', () =>{
    it('render of test.hbs', done =>{
        chai.request(app)
        .get('test/render').end((err, res)=>{
            expect(res).to.have.status(200 || 304);
            expect(res.body).to.equals('<h1>Render Test</h1>');
            done();
        })
    })
})