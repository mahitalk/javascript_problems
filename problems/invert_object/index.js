// Invert an Object:
// Swap keys and values of an object.
// invertObject({ a: 1, b: 2, c: 3 });
// // Output: { 1: "a", 2: "b", 3: "c" }

function invertObject(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(invertObject({ a: 1, b: 2, c: 3 }));
