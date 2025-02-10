// Check for a Key:
// Write a function that checks whether a given key exists in an object or not.
// js
// Copy
// Edit
// hasKey({ a: 1, b: 2, c: 3 }, "b"); // Output: true

function hasKey(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return true;
  } else {
    return false;
  }
}
let obj = { a: 1, b: 2, c: 3 };
console.log(hasKey({ a: 1, b: 2, c: 3 }, "d"));
