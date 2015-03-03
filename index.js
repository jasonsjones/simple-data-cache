/**
 * @fileOverview Implementation of a dictionary data structure
 * @author Jason S. Jones
 * @version 0.1.0
 * @license MIT
 */
(function () {
    'use strict';

    function Dictionary() {
        this._items = {};
    }

    Dictionary.prototype = {

        size: function () {
            return Object.keys(this._items).length;
        },

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
