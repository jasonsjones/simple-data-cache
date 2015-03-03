/* globals describe it beforeEach afterEach */

require('should');
var Dictionary = require('../');

describe('Dictionary Unit Tests', function() {
    var dict;

    beforeEach(function () {
        dict = new Dictionary();
    });

    afterEach(function () {
        dict = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should instantiate a dictionary instance', function () {
        dict.should.be.ok;
        dict.should.be.instanceof(Dictionary);
    });

    it('should be empty when first instantiated', function () {
        dict.isEmpty().should.equal(true);
        dict.size().should.equal(0);
    });
});
