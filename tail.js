// FUNCTION IMPLEMENTATION

const tail = function(tailArr) {
  tailArr.slice(1);
  return tailArr.length;
};

const assertEqual = require('./assertEqual');
module.exports = tail;

/*
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!