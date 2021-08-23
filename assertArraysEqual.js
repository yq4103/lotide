/*
const eqArrays = function(equalOne, equalTwo) {
  if (equalOne.length !== equalTwo.length) {
    return false;
  }
  for (let i = 0; i < equalOne.length; i++) {
    if (equalOne[i] !== equalTwo[i]) {
      return false;
    }
  }
  return true;
};
*/

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(equalOne, equalTwo) {

  if (eqArrays(equalOne, equalTwo)) {
    console.log(`Assertion Passed: ${equalOne} === ${equalTwo}`);
  } else {
    console.log(`Assertion Failed: ${equalOne} !== ${equalTwo}`);
  }
};

module.exports = assertArraysEqual;

//assertArraysEqual([1, 2, 3, 6, 8], [1, 2, 3, 6, 9]);
//assertArraysEqual([1, 2, 3, 6, 8], [1, 2, 3, 6, 8]);