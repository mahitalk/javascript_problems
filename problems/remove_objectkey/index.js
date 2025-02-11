// Remove a Key from an Object:
// Write a function that removes a specific key from an object.
// removeKey({ a: 1, b: 2, c: 3 }, "b");
// Output: { a: 1, c: 3 }

function removeKey(obj, specifickey) {
  for (let key in obj) {
    if (key == specifickey) {
      delete obj[key];
    }
  }
  return obj;
}
console.log(removeKey({ a: 1, b: 2, c: 3 }, "b"));
