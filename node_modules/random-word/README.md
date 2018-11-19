random-word
===========

random generate a word.

install
=======

npm install brighthas/random-word

API
===

##### #new

```js
var R = require("random-word");
var r = R([str]);
```
or
```js
var r = new R([str]);
```

`str` String type . use str generate word.

##### #add(str)

`str` String type . use str generate word.

return self.

Example:
```js
r.add("abc").add("efg");
```

##### #random(size)

`size` set return word length;

return a random word;

LICENSE
=======

MIT , brighthas@gmail.com

