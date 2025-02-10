// Find Maximum Value in an Object:
// Write a function to find the key with the maximum     value in an object.
// maxKey({ a: 10, b: 25, c: 15 }); // Output: "b"

function maxKey(obj) {
  let maxKey = null;
  let maxValue = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (maxValue < value) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
}
let obj = { a: 100, b: 25, c: 55 };
console.log(maxKey(obj));
