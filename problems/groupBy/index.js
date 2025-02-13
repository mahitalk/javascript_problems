// Group Objects by a Key:
// Given an array of objects, group them by a specific property.
// groupBy([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 25 }], "age");
// // Output: { "25": [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], "30": [{ name: "Bob", age: 30 }] }

// function groupBy(arr, key) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];

//     let keyValue = item[key];

//     if (obj[keyValue]) {
//       let existingValue = obj[keyValue];
//       existingValue.push(item);

//       obj[keyValue] = existingValue;
//     } else {
//       obj[keyValue] = [item];
//     }
//   }
//   return obj;
// }
// console.log(
//   groupBy(
//     [
//       { name: "Alice", age: 25 },
//       { name: "Bob", age: 30 },
//       { name: "Charlie", age: 25 },
//     ],
//     "age"
//   )
// );

// var result = {
//   25: [{ name: "Alice", age: 25 }],
//   30: [{ name: "Bob", age: 30 }],
// };

function groupBy(arr, age) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i][age]]) {
      let existingValue = obj[arr[i][age]];
      existingValue.push(arr[i]);
    } else {
      obj[arr[i][age]] = new Array(arr[i]);
    }
  }
  return obj;
}
console.log(
  groupBy(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age"
  )
);
