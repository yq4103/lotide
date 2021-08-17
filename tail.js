// FUNCTION IMPLEMENTATION

const tail = function(tailArr) {
  return tailArr.slice(1);
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!