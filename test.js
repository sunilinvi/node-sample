/*************Test******************/
var test = require('unit.js');
var str = 'kgdkagwkd, world!';

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
    console.log('Passed');
}
/***********************************/
