/**
 * @fileOverview Implementation of a dictionary data structure
 * @author Jason S. Jones
 * @version 0.1.0
 * @license MIT
 */
(function () {
    'use strict';

    /**
     * Creates a new dictionary instance
     *
     * @constructor
     */
    function Dictionary() {
        this._items = {};
    }

    /*
     * All member functions attached to the Dictionary prototype.  All
     * dictionary instances will share these methods, meaning there will
     * NOT be copies made for each instance.  This can be a potential memory
     * savings since there can be several different dictionary instances
     * instantiated.
     */
    Dictionary.prototype = {

        /**
         * Returns the size, or number of items in the dictionary
         *
         * @returns {number} the number of items in the dictionary
         */
        size: function () {
            return Object.keys(this._items).length;
        },

        /**
         * Determines if the dictionary is empty
         *
         * @ returns {boolean} true if dictionary is empty, false otherwise
         */
        isEmpty: function () {
            return this.size() === 0;
        },

        set: function (key, value) {
            this._items[key] = value;
        },

        has: function (key) {
            return key in this._items;
        },

        remove: function (key) {
            if (this.has(key)) {
                delete this._items[key];
                return true;
            }
            return false;
        },

        get: function (key) {
            if (this.has(key)) {
                return this._items[key];
            } else {
                return -1;
            }
        },

        keys: function () {
            return Object.keys(this._items);
        },

        values: function () {
            var values = [];
            for (var key in this._items) {
                if (this._items.hasOwnProperty(key)) {
                    values.push(this._items[key]);
                }
            }
            return values;
        },

        getItems: function () {
            return this._items;
        },

        clear: function () {
            this._items = {};
        }
    };

    module.exports = Dictionary;
}());
