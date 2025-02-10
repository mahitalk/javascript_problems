// Key Count:
// Write a function that takes an object as input and returns the number of keys in the object.
// js
// Copy
// Edit
// countKeys({ name: "Alice", age: 25, city: "New York" }); // Output: 3

function countKeys(obj) {
  let count = 0;
  for (let key of Object.keys(obj)) {
    count = count + 1;
  }
  return count;
}
let obj = { name: "Alice", age: 25, city: "New York" };
console.log("count", countKeys(obj));
