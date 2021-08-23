const assertArraysEqual = require ('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 6, 8], [1, 2, 3, 6, 9]);
assertArraysEqual([1, 2, 3, 6, 8], [1, 2, 3, 6, 8]);