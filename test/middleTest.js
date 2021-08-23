const middle = require ('../middle');
const assertArraysEqual = require ('../assertArraysEqual');

middle([3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);