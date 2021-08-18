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

const assertArraysEqual = function(equalOne, equalTwo) {

  if (eqArrays(equalOne, equalTwo)) {
    return (`Assertion Passed`);
  } else {
    return (`Assertion Failed`);
  }
};

console.log(assertArraysEqual([1, 2, 3, 6, 8], [1, 2, 3, 6, 9]));