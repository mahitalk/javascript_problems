// Flatten a Nested Object:
// Convert a deeply nested object into a flat object.
// flattenObject({ a: { b: { c: 1 } }, d: 2 });
// Output: { "a.b.c": 1, "d": 2 }

function flattenObject(obj, prefix = "") {
  let obj3 = {};
  for (let key in obj) {
    if (
      typeof obj[key] === "object" &&
      !(obj[key] === null) &&
      !Array.isArray(obj[key])
    ) {
      let temp = flattenObject(obj[key], prefix + key + ".");
      Object.assign(obj3, temp);
      // for (let k in temp) {
      //   obj3[key + "." + k] = temp[k];
      //   console.log(" obj3[key.k]", obj3[key + "." + k]);
      // }
    } else {
      obj3[prefix + key] = obj[key];
    }
  }
  return obj3;
}
console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));
