/* globals describe it beforeEach afterEach */

require('should');
var DataCache = require('../');

describe('Data cache Unit Tests', function() {
    var dataCache;

    beforeEach(function () {
        dataCache = new DataCache();
    });

    afterEach(function () {
        dataCache = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should instantiate a data cache instance', function () {
        dataCache.should.be.ok;
        dataCache.should.be.instanceof(DataCache);
    });

    it('should be empty when first instantiated', function () {
        dataCache.isEmpty().should.equal(true);
        dataCache.size().should.equal(0);
    });

    it('should add items to the data cache', function () {
        dataCache.set('dict', 'data structure');
        dataCache.set('set', 'another data structure');
        dataCache.size().should.equal(2);
    });

    it('should determine if the data cache has a particular key', function () {
        dataCache.set('dict', 'data structure');
        dataCache.set('set', 'another data structure');
        dataCache.has('dict').should.equal(true);
        dataCache.has('set').should.equal(true);
    });

    it('should correctly remove an item', function () {
        dataCache.set('dict', 'data structure');
        dataCache.set('set', 'another data structure');
        dataCache.remove('dict').should.equal(true);
        dataCache.size().should.equal(1);
        dataCache.remove('nothing').should.equal(false);
    });

    it('should correctly get an item', function () {
        dataCache.set('dict', 'data structure');
        dataCache.set('set', 'another data structure');
        dataCache.get('dict').should.equal('data structure');
        dataCache.get('set').should.equal('another data structure');
        dataCache.get('nothing').should.equal(-1);
    });

    it('should return all the keys in the data cache', function () {
        dataCache.set('dict', 'data structure');
        dataCache.set('set', 'another data structure');
        dataCache.set('linked-list', 'a very good data structure');
        var keys = dataCache.keys();
        keys.should.be.an.Array;
        keys.should.be.length(3);
        keys.should.containEql('dict', 'set', 'linked-list');
    });

    it('should return all the values in the data cache', function () {
        dataCache.set('dict', 'data structure');
        dataCache.set('set', 'another data structure');
        dataCache.set('linked-list', 'a very good data structure');
        var values = dataCache.values();
        values.should.be.an.Array;
        values.should.be.length(3);
        values.should.containEql('data structure',
            'another data structure', 'a very good data structure');
    });

    it('should return the complete contents of the data cache', function () {
        dataCache.set('dict', 'data structure');
        dataCache.set('set', 'another data structure');
        dataCache.set('linked-list', 'a very good data structure');
        var items = dataCache.getItems();
        items.should.be.an.Object;
        items.should.have.properties('set', 'dict', 'linked-list');
    });

    it('should clear the data cache of all items', function () {
        dataCache.set('dict', 'data structure');
        dataCache.set('set', 'another data structure');
        dataCache.set('linked-list', 'a very good data structure');
        dataCache.size().should.equal(3);
        dataCache.clear();
        dataCache.size().should.equal(0);
        dataCache.isEmpty().should.equal(true);
    });
});
