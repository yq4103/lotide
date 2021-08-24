// FUNCTION IMPLEMENTATION

const head = function(headArr) {
  return headArr.shift();
};

const assertEqual = require('./assertEqual');
module.exports = head;

/*const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/


// TEST CODE
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");