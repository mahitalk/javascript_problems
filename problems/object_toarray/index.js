// Object to Array Conversion:
// Convert an object into an array of [key, value] pairs.
// objectToArray({ a: 1, b: 2, c: 3 });
// Output: [["a", 1], ["b", 2], ["c", 3]]

function objectToArray(obj) {
  return Object.entries(obj);
}
let obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj));
