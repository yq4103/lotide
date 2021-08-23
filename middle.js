/*
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
*/

const assertArraysEqual = require ('./assertArraysEqual');

const middle = function(array) {
  //The middle function should return an array with only the middle element(s) of the provided array.
  //create a loop to loop through the array
  for (let i = 0; i < array.length; i++) {
    let newArr = [];
    //For arrays with one or two elements, there is no middle. Return an empty array.
    if (array.length <= 2) {
      return [];
    } else if (array.length % 2 !== 0) {
      //For arrays with odd number of elements, an array containing a single middle element should be returned.
    
      newArr.push(array[(array.length - 1) / 2]);
    } else if (array.length % 2 === 0) {
      //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
      newArr.push(array[Math.floor((array.length - 1) / 2)], array[array.length / 2]);
    }
  
    return newArr;
  }

};

module.exports = middle;

//middle([3]);
//middle([1, 2, 3, 4, 5]);
//middle([1, 2, 3, 4]);
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);