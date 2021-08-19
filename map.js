const words = ["ground", "control", "to", "major", "tom"];

const map = function(words, results1) {
  
  const results = [];
  for (let word of words) {
    results.push(results1(word));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

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
    console.log(`Assertion Passed: ${equalOne} === ${equalTwo}`);
  } else {
    console.log(`Assertion Failed: ${equalOne} !== ${equalTwo}`);
  }
};

assertArraysEqual(["ground", "control", "to", "major", "tom"], ['g', 'c', 't', 'm', 't']);