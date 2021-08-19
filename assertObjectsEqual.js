const eqObjects = function(object1, object2) {
  // comparing the length of the two objects, if not equal, exist
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
//key is the key of the object, object1[key] is the value, comparing the value of the same key
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    if(object1[key] !== object2[key]) {
    return false;
    } 
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);





