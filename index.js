/**
 * @fileOverview Implementation of a dictionary data structure, or simple
 *               data cache
 * @author Jason S. Jones
 * @version 0.1.0
 * @license MIT
 */
(function () {
    'use strict';

    /**
     * Creates a new simple data cache instance
     *
     * @constructor
     */
    function SimpleDataCache() {
        this._items = {};
    }

    /*
     * All member functions attached to the SimpleDataCache prototype.  All
     * dictionary instances will share these methods, meaning there will
     * NOT be copies made for each instance.  This can be a potential memory
     * savings since there can be several different data cache instances
     * instantiated.
     */
    SimpleDataCache.prototype = {

        /**
         * Returns the size, or number of items in the data cache
         *
         * @returns {number} the number of items in the data cache
         */
        size: function () {
            return Object.keys(this._items).length;
        },

        /**
         * Determines if the data cache is empty
         *
         * @returns {boolean} true if data cache is empty, false otherwise
         */
        isEmpty: function () {
            return this.size() === 0;
        },

        /**
         * Adds the key/value pair to the data cache
         *
         * @param {string} key the key to store in the data cache
         * @param {number|string|object} value the value to associate with
         *          the key in the data cache
         */
        set: function (key, value) {
            this._items[key] = value;
        },

        /**
         * Determines if the data cache contains the key
         *
         * @param {string} key the key to find in the data cache
         * @returns {boolean} true if the key is in the data cache, false
         *          otherwise
         */
        has: function (key) {
            return key in this._items;
        },

        /**
         * Removes the item with the matching key from the data cache
         *
         * @param {string} key the key of the item to remove from the data cache
         * @returns {boolean} true if the item with the key wsa removed, false
         *          otherwise
         */
        remove: function (key) {
            if (this.has(key)) {
                delete this._items[key];
                return true;
            }
            return false;
        },

        /**
         * Returns the item with the matching key from the data cache
         *
         * @param {string} key the key of the item to return from the data cache
         * @returns {string|number|object} the value of the item from the data
                    store with the matching key if it is contained in the data
                    store.  If it is not in the data cache, return -1.
         */
        get: function (key) {
            if (this.has(key)) {
                return this._items[key];
            } else {
                return -1;
            }
        },

        /**
         * Returns an array of all the keys stored in the data cache
         *
         * @returns {object} an array containing all the keys stored in the
                    data cache
         */
        keys: function () {
            return Object.keys(this._items);
        },

        /**
         * Returns an array of all the values stored in the data cache
         *
         * @returns {object} an array containing all the values stored in the
                    data cache
         */
        values: function () {
            var values = [];
            for (var key in this._items) {
                if (this._items.hasOwnProperty(key)) {
                    values.push(this._items[key]);
                }
            }
            return values;
        },

        /**
         * Returns all the key/value pairs stored in the data cache
         *
         * @returns {object} all key/value pairs stored in the data cache
         */
        getItems: function () {
            return this._items;
        },

        /**
         * Clears the data cache of all key/value pairs
         */
        clear: function () {
            this._items = {};
        }
    };

    // Expose SimpleDataCache
    module.exports = SimpleDataCache;

}());
