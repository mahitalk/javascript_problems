// Merge Two Objects:
// Write a function that merges two objects into one.
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
// Output: { a: 1, b: 2, c: 3, d: 4 }

function mergeObjects(obj1, obj2) {
  let obj = Object.assign({}, obj1, obj2);
  return obj;
}
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, d: 4 };
console.log(mergeObjects(obj1, obj2));
