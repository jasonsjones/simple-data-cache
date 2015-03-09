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

    it('should add items to the dictionary', function () {
        dict.set('dict', 'data structure');
        dict.set('set', 'another data structure');
        dict.size().should.equal(2);
    });

    it('should determine if the dictionary has a particular key', function () {
        dict.set('dict', 'data structure');
        dict.set('set', 'another data structure');
        dict.has('dict').should.equal(true);
        dict.has('set').should.equal(true);
    });

    it('should correctly remove an item', function () {
        dict.set('dict', 'data structure');
        dict.set('set', 'another data structure');
        dict.remove('dict').should.equal(true);
        dict.size().should.equal(1);
        dict.remove('nothing').should.equal(false);
    });

    it('should correctly get an item', function () {
        dict.set('dict', 'data structure');
        dict.set('set', 'another data structure');
        dict.get('dict').should.equal('data structure');
        dict.get('set').should.equal('another data structure');
        dict.get('nothing').should.equal(-1);
    });

    it('should return all the keys in the dictionary', function () {
        dict.set('dict', 'data structure');
        dict.set('set', 'another data structure');
        dict.set('linked-list', 'a very good data structure');
        var keys = dict.keys();
        keys.should.be.an.Array;
        keys.should.be.length(3);
        keys.should.containEql('dict', 'set', 'linked-list');
    });

    it('should return all the values in the dictionary', function () {
        dict.set('dict', 'data structure');
        dict.set('set', 'another data structure');
        dict.set('linked-list', 'a very good data structure');
        var values = dict.values();
        values.should.be.an.Array;
        values.should.be.length(3);
        values.should.containEql('data structure',
            'another data structure', 'a very good data structure');
    });

    it('should return the complete contents of the dictionary', function () {
        dict.set('dict', 'data structure');
        dict.set('set', 'another data structure');
        dict.set('linked-list', 'a very good data structure');
        var items = dict.getItems();
        items.should.be.an.Object;
        items.should.have.properties('set', 'dict', 'linked-list');
    });

    it('should clear the dictionary of all items', function () {
        dict.set('dict', 'data structure');
        dict.set('set', 'another data structure');
        dict.set('linked-list', 'a very good data structure');
        dict.size().should.equal(3);
        dict.clear();
        dict.size().should.equal(0);
        dict.isEmpty().should.equal(true);
    });
});
