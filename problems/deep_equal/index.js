// Check if Two Objects are Deeply Equal:
// Write a function to check whether two objects are deeply equal.
// deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });
// Output: true

// function deepEqual(obj1, obj2) {
//   debugger;
//   if (Object.keys(obj1).length != Object.keys(obj2).length) {
//     return false;
//   }
//   for (let key in Object.keys(obj1)) {
//     if (!Object.keys(obj2).includes(key)) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

function deepEqual(obj1, obj2) {
  // if (obj1 === obj2) {
  //   return true;
  // }

  // if (
  //   obj1 == null ||
  //   typeof obj1 !== "object" ||
  //   obj2 == null ||
  //   typeof obj2 !== "object"
  // ) {
  //   return false;
  // }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

console.log(deepEqual(obj1, obj2));
