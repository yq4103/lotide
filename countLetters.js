const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(vocab) {
  let results = {};
  for (let letter of vocab) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters('lhl'));
console.log(assertEqual(countLetters('lhl')));