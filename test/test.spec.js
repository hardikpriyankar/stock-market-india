var assert = require('assert');
describe('test', function() {
    it('should return an array', function() {
        assert(Array.isArray('a,b,c'.split(',')));
    });
})