# [![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependency status][dm-image]][dm-url]

# Simple Data Cache

## Description

This is a javascript implementation of a
[dictionary](http://en.wikipedia.org/wiki/Associative_array)
data structure that represents a very simple, but effective, data cache.

This implementation does not store any data to a database or localStorage;
therefore, the data stored in the data cache, or dictionary, will not persist
between instances unless additional custom code is written to provide that
functionality. This implemention is simply an in-memory data store used to
store key/value pairs.  Nevertheless, this simple data cache can be very useful.

*For specific examples and documentation, see the below sections*

#### Environment:

Although this implementation is designed to be used with
[Node.js](http://www.nodejs.org), it could be used in other contexts with minor
modifications.  This implementation does not have any external dependencies
that would preclude it from being used in the browser--just include it with a
`<script>` tag and it should be good to go.  _Disclaimer: I have not tested
this implementation in any other context/environment; only tested with node.js_

----

## Basic Usage

Install with npm :

```bash
npm install simple-data-cache --save
```
Basic usage example below.  _Note: it may not cover all the available
methods, rather just highlights the main functionality to get up and running
with this data structure. For a description of all the methods, see the
API section._

```javascript
var SimpleDataCache = require('simple-data-cache');
var sdc = new SimpleDataCache();

sdc.isEmpty();
// --> true

sdc.set('key1', 'value1');
sdc.set('key2', 'value2');
sdc.set('key3', 'value3');

sdc.size();
// --> 3
sdc.isEmpty();
// --> false

sdc.has('key2');
// --> true
sdc.has('key4');
// --> false

sdc.get('key3');
// ==> 'value3'

sdc.keys();
// --> ['key1', 'key2', 'key3']
sdc.values();
// --> ['value1', 'value2', 'value3']

sdc.clear();
sdc.isEmpty();
// --> true
```

## API

**Available methods for a Simple Data Cache instance:**

* ### size()
    Returns the size, or number of items in the data cache

* ### isEmpty()
    Determines if the data cache is empty or not. Returns true if is empty, false
    otherwise.

* ### set(key, value)
    Adds the key/value pair to the data cache

* ### has(key)
    Determines if the data cache contains the key

* ### remove(key)
    Removes the item with the matching key from the data cache

* ### get(key)
    Returns the item with the matching key from the data cache

* ### keys()
    Returns an array of all the keys stored in the data cache

* ### values()
    Returns an array of all the values stored in the data cache

* ### getItems()
    Returns all the key/value pairs stored in the data cache

* ### clear()
    Clears the data cache of all key/value pairs

----
## License
MIT &copy; Jason Jones

[npm-image]:https://badge.fury.io/js/simple-data-cache.svg
[npm-url]:http://npmjs.org/package/simple-data-cache
[travis-image]:https://travis-ci.org/jasonsjones/simple-data-cache.svg
[travis-url]:https://travis-ci.org/jasonsjones/simple-data-cache
[dm-image]:https://david-dm.org/jasonsjones/simple-data-cache.svg
[dm-url]:https://david-dm.org/jasonsjones/simple-data-cache
