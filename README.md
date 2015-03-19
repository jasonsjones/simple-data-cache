# Simple Data Cache

## Description

This is a javascript implementation of a
[dictionary](http://en.wikipedia.org/wiki/Associative_array)
data structure that represents a very simple, but effective, data cache.

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
# work in progress; not yet published to npm
npm install simple-data-cache --save
```
Basic usage example below.  _Note: it does not cover all the available
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

----
## License
MIT &copy; Jason Jones
