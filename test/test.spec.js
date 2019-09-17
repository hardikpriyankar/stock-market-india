const expect = require('chai').expect
var request = require('request');


it('Main page content', (done) => {
    request('http://localhost:3100', (error, resp, body) => {
        expect(body).to.equal('ci with travis');
        done();
    })
});


// const server = require('../app');
// console.log("server ", server);
// describe('test', () => {
//     it('should return a string', () => {
//         expect('ci with travis').to.equal('ci with travis');
//     });
// });