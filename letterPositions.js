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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
      //For each letter in your results object, create an array if one is not already there, before trying to push new numbers into them.
    }
  }
  return results;
};

console.log(assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]));
