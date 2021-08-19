const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(bestShows, show) {
  for (let genre in bestShows) {
    if (bestShows[genre] === show) {
      return genre;
    }
  } return undefined;
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
