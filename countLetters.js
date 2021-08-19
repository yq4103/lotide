const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
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
const result1 = countLetters('lhl');
const result2 = countLetters('lighthouse');
assertEqual(result1.l, 2);
assertEqual(result2.h, 2);

