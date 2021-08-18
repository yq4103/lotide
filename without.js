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



const without = function(source,itemToRemove) {
  const resultArray = [];
  for (let item of source) {

    if (!(itemToRemove.includes(item))) {
      resultArray.push(item);
    }
  }
  return resultArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));