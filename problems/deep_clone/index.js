// Deep Clone an Object:
// Write a function to deep copy an object without using JSON.parse(JSON.stringify(obj)).
// deepClone({ a: 1, b: 2, c: {d: 3} });

function deepClone(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

console.log(deepClone({ a: 1, b: 2, c: { d: { e: 7 } } }));
