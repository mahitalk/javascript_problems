// 1. Deep Merge Two Objects
// Write a function to deeply merge two objects.
//  If a key exists in both objects and the values are objects,
// merge them recursively. Otherwise, the second object's value
// should overwrite the first.

let obj1 = {
  x: 10,
  y: {
    a: 2,
    b: 3,
    c: { d: 4 },
  },
  z: [1, 2, 3, 4, 5],
  k: "hello",
};

let obj2 = {
  x: 3,
  y: { a: 3, b: { c: 2, d: 4 }, c: { e: 4 }, e: 2, f: 4 },
  z: [3, 4, 5, 6, 7, 8],
  k: "world",
};

// obj2["y"]["b"]["d"]
// obj2.y.b.d
// for (let i = 0; i < obj2["z"].length; i++) {

// }
// Recursion - when a function call itself
const NumberType = "number";
const StringType = "string";
const ArrayType = "array";
const ObjectType = "object";

function checkType(a) {
  if (typeof a === "number") {
    return NumberType;
  } else if (typeof a === "string") {
    return StringType;
  } else if (typeof a === "object") {
    if (Array.isArray(a)) {
      return ArrayType;
    } else {
      return ObjectType;
    }
  }
}

function deepMergeTwoObjects(object1, object2) {
  let object3 = {};
  // console.log("object1", object1);
  // console.log("object2", object2);

  debugger;

  for (let key in object1) {
    if (object2[key]) {
      // if type is different, then use second object value
      // if type is same and is number, then add those numbers
      // if tye is same and is string, concat string
      // if type is same and is object, then deepMerge objects
      if (checkType(object1[key]) === checkType(object2[key])) {
        if (checkType(object1[key]) == NumberType) {
          object3[key] = object1[key] + object2[key];
        } else if (checkType(object1[key]) == StringType) {
          object3[key] = object1[key].concat(object2[key]);
        } else if (checkType(object1[key]) == ObjectType) {
          object3[key] = deepMergeTwoObjects(object1[key], object2[key]);
        } else if (checkType(object1[key]) == ArrayType) {
        }
      } else {
        //{a: 3, b: 6}
        object3[key] = object2[key];
      }
    } else {
      object3[key] = object1[key];
    }
  }

  for (let key in object2) {
    if (!object3[key]) {
      object3[key] = object2[key];
    }
  }

  return object3;
}

console.log(deepMergeTwoObjects(obj1, obj2));

// let obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };

// key = "a"
// key = "b"
// key = "c"
// key = "d"

// obj1[key]
// obj1["e"] = 5;
// console.log(obj1["a"])

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// sum(2,3)
// Math.sum(2,3)

// collection of properties(variables) and functionalites(functions/methods)
// class Fan {
//   let color;
//   let noofblades;
//   let brandName;

//   run(a) {

//   }
//   stop() {

//   }
//   repair(){

//   }
// }

// Fan.color;
// Fan.run("afasd")
// Fan.stop()

// run () {

// }
// run()

// difference between functions and methods
// function written inside Class is known as method
// class Object {
//  keys(obj){
//  }
// }
