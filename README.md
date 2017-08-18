# Deep Map Keys

# API
deepMapKeys(obj, mod);

| Param | Type | Description |
| ------ | ------ | ------ |
| obj or array | {} or [] | An object or array whose keys are to be modified |
| mod | function | A function by which the keys of your object will be modified |

# Install

```sh
$ npm install
```

# Tests
```sh
$ npm test
```

# Example
```javascript

// Example with an object
 const testObject = {
    a: true,
    b: [{
      c: 'val'
    }]
 };
 deepMapKeys(testObject, key => key.toUpperCase()); 
 /* {
    A: true,
    B: [{
      C: 'val'
    }]
 }
*/

// Example with an array
const testArray = [{
    a: 'hi'
  }, {
    b: 'bye',
    c: {
      d: 'yo'
    }
  }];

  result = deepMapKeys(testArray, key => key.toUpperCase());

/*
  [{
	A: 'hi'
   }, {
   B: 'bye',
   C: {
	 D: 'yo'
	}
   }]
*/
```

# Author
 - Jonathan Schapiro

# Special Thanks
 - Jeff Knight


