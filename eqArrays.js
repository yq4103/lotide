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

const assertEqual = require('./assertEqual');
module.exports = eqArrays;

/*
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/


//assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 5]), true);
//assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 6]), false);
//assertEqual(eqArrays([1, 2, 3, 6, 8], [1, 2, 3, 6, 9]), true);