const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 5]), true);
assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 6]), false);
assertEqual(eqArrays([1, 2, 3, 6, 8], [1, 2, 3, 6, 9]), true);