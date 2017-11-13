/*************Test******************/
var test = require('unit.js');
var str = 'Hellod, world!';

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
    console.log('Passed');
}
/***********************************/
