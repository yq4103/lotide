const eqArrays = function(equalOne, equalTwo) {
  for (let i = 0; i < equalOne.length; i++) {
      if(equalOne[i] !== equalTwo[i])
      return false;
  } return true;
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
};



console.log(assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 5]), true));
console.log(assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 6]), false));
console.log(assertEqual(eqArrays([1, 2, 3, 6, 8], [1, 2, 3, 6, 8]), false));