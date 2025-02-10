// Key Count:
// Write a function that takes an object as input and returns the number of keys in the object.

function key_count(obj) {
  let count = 0;
  for (let key of Object.keys(obj)) {
    count = count + 1;
  }
  return count;
}
let obj = { name: "manai", age: 78, occupation: "hdug", hjh: "jgug" };
console.log("count", key_count(obj));
