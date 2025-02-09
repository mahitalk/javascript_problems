/*  
Print Numbers
Description: Print numbers from 1 to 10 using a loop.
Example Output: 1 2 3 4 5 6 7 8 9 10

Even or Odd
Description: Check if a number is even or odd.
Example Input: 7
Example Output: Odd

Sum of Natural Numbers
Description: Find the sum of the first n natural numbers.
Example Input: n = 5
Example Output: 15 (1 + 2 + 3 + 4 + 5)

Factorial
Description: Find the factorial of a number.
Example Input: n = 4
Example Output: 24 (4 × 3 × 2 × 1)

Prime Number Checker
Description: Check if a number is prime (divisible only by 1 and itself).
Example Input: 7
Example Output: Prime

Sum of Digits
Description: Find the sum of the digits of a number.
Example Input: 123
Example Output: 6 (1 + 2 + 3)

Power of a Number
Description: Calculate a^b without using built-in functions.
Example Input: a = 2, b = 3
Example Output: 8 (2 × 2 × 2)

GCD of Two Numbers
Description: Find the Greatest Common Divisor (GCD) of two numbers.
Example Input: 12, 18
Example Output: 6

LCM of Two Numbers
Description: Calculate the Least Common Multiple (LCM) of two numbers.
Example Input: 4, 6
Example Output: 12

Armstrong Number
Description: Check if a number equals the sum of its digits raised to the power of the number of digits.
Example Input: 153
Example Output: Armstrong

Find Maximum
Description: Find the largest number in an array.
Example Input: [1, 3, 7, 2]
Example Output: 7

Find Minimum
Description: Find the smallest number in an array.
Example Input: [8, 4, 2, 6]
Example Output: 2

Find Second Largest
Description: Find the second largest number in an array.
Example Input: [12, 34, 23, 56]
Example Output: 34

Reverse Array
Description: Reverse the elements in an array.
Example Input: [1, 2, 3]
Example Output: [3, 2, 1]

Sort Array
Description: Sort an array in ascending order.predefined function not use.
Example Input: [4, 2, 9, 1]
Example Output: [1, 2, 4, 9]

Remove Duplicates
Description: Remove duplicate elements from an array.
Example Input: [1, 2, 2, 3]
Example Output: [1, 2, 3]

Find Index
Description: Find the index of a given number in an array.
Example Input: [10, 20, 30], target = 20
Example Output: 1

Array Sum
Description: Calculate the sum of all numbers in an array.
Example Input: [4, 5, 6]
Example Output: 15

Rotate Array
Description: Rotate an array to the left by k steps.
Example Input: [1, 2, 3, 4, 5], k = 2
Example Output: [3, 4, 5, 1, 2]  // not done

Count Occurrences
Description: Count the occurrences of each element in an array.
Example Input: [1, 2, 2, 3, 3, 3]
Example Output: {1: 1, 2: 2, 3: 3} 
*/

///let arr = [10, 7, 8, 4, 2, 9];
// [7, 10, 8, 4, 2, 9]
// [7, 8, 10, 4, 2, 9]
// [7, 8, 4, 10, 2, 9]
// [7, 8, 4, 2, 10, 9]
// [7, 8, 4, 2, 9, 10]

// [7, 8, 4, 2, 9, 10]
// [7, 4, 8, 2, 9, 10]
// [7, 4, 2, 8, 9, 10]
// [7, 4, 2, 8, 9, 10]

// [4, 7, 2, 8, 9, 10]
// [4, 2, 7, 8, 9, 10]
// [4, 2, 7, 8, 9, 10]

// [2, 4, 7, 8, 9, 10]
// [2, 4, 7, 8, 9, 10]

// [2, 4, 7, 8, 9, 10]

// /*
// Beginner-Level Questions
// Create an Object:
// Write a JavaScript object that represents a student with properties name, age, and marks. Add a method to calculate the student's grade based on marks.

// Key Count:
// Write a function that takes an object as input and returns the number of keys in the object.

// js
// Copy
// Edit
// countKeys({ name: "Alice", age: 25, city: "New York" }); // Output: 3
// Check for a Key:
// Write a function that checks whether a given key exists in an object or not.

// js
// Copy
// Edit
// hasKey({ a: 1, b: 2, c: 3 }, "b"); // Output: true
// Merge Two Objects:
// Write a function that merges two objects into one.

// js
// Copy
// Edit
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
// // Output: { a: 1, b: 2, c: 3, d: 4 }
// Intermediate-Level Questions
// Object to Array Conversion:
// Convert an object into an array of [key, value] pairs.

// js
// Copy
// Edit
// objectToArray({ a: 1, b: 2, c: 3 });
// // Output: [["a", 1], ["b", 2], ["c", 3]]
// Find Maximum Value in an Object:
// Write a function to find the key with the maximum value in an object.

// js
// Copy
// Edit
// maxKey({ a: 10, b: 25, c: 15 }); // Output: "b"
// Invert an Object:
// Swap keys and values of an object.

// js
// Copy
// Edit
// invertObject({ a: 1, b: 2, c: 3 });
// // Output: { 1: "a", 2: "b", 3: "c" }
// Remove a Key from an Object:
// Write a function that removes a specific key from an object.

// js
// Copy
// Edit
// removeKey({ a: 1, b: 2, c: 3 }, "b");
// // Output: { a: 1, c: 3 }
// Advanced-Level Questions
// Deep Clone an Object:
// Write a function to deep copy an object without using JSON.parse(JSON.stringify(obj)).

// Flatten a Nested Object:
// Convert a deeply nested object into a flat object.

// js
// Copy
// Edit
// flattenObject({ a: { b: { c: 1 } }, d: 2 });
// // Output: { "a.b.c": 1, "d": 2 }
// Group Objects by a Key:
// Given an array of objects, group them by a specific property.
// js
// Copy
// Edit
// groupBy([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 25 }], "age");
// // Output: { "25": [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], "30": [{ name: "Bob", age: 30 }] }
// Check if Two Objects are Deeply Equal:
// Write a function to check whether two objects are deeply equal.
// js
// Copy
// Edit
// deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });
// // Output: true
// Would you like solutions for any of these questions? 🚀

// You said:
// give me some more advanced level
// ChatGPT said:
// Here are some advanced-level JavaScript object problems that require a deep understanding of objects, recursion, and functional programming concepts.

// 1. Deep Merge Two Objects
// Write a function to deeply merge two objects. If a key exists in both objects and the values are objects, merge them recursively. Otherwise, the second object's value should overwrite the first.

// Example:
// js
// Copy
// Edit
// deepMerge({ a: { x: 10 }, b: 20 }, { a: { y: 30 }, b: 40, c: 50 });
// // Output: { a: { x: 10, y: 30 }, b: 40, c: 50 }
// 2. Find the Most Frequent Value in an Object
// Write a function that finds the most frequently occurring value in an object, including nested objects.

// Example:
// js
// Copy
// Edit
// mostFrequentValue({ a: 1, b: 2, c: 1, d: { e: 2, f: 1 } });
// // Output: 1 (since it appears 3 times)
// 3. Convert Nested Object to a Single-Level Object (Flattening)
// Write a function that converts a deeply nested object into a single-level object with dot-separated keys.

// Example:
// js
// Copy
// Edit
// flattenObject({ a: { b: { c: 1 } }, d: 2 });
// // Output: { "a.b.c": 1, "d": 2 }
// 4. Convert a Flat Object Back to a Nested Object
// Write a function that takes a flat object with dot-separated keys and converts it back into a nested object.

// Example:
// js
// Copy
// Edit
// unflattenObject({ "a.b.c": 1, "d": 2 });
// // Output: { a: { b: { c: 1 } }, d: 2 }
// 5. Find the Deepest Key in an Object
// Write a function that returns the deepest key in a nested object.

// Example:
// js
// Copy
// Edit
// deepestKey({ a: { b: { c: { d: 10 } } }, x: 5 });
// // Output: "d"
// 6. Compute the Depth of a Nested Object
// Write a function that returns the maximum depth of a nested object.

// Example:
// js
// Copy
// Edit
// objectDepth({ a: { b: { c: { d: 10 } } }, x: 5 });
// // Output: 4
// 7. Convert Object to Query String
// Convert an object into a URL query string format.

// Example:
// js
// Copy
// Edit
// toQueryString({ name: "Alice", age: 25, city: "New York" });
// // Output: "name=Alice&age=25&city=New+York"
// 8. Find All Paths in a Nested Object
// Write a function that finds all possible paths from the root of an object to its leaf nodes.

// Example:
// js
// Copy
// Edit
// getPaths({ a: { b: { c: 1 } }, d: 2 });
// /* Output:
// [
//   ["a", "b", "c"],
//   ["d"]
// ]
// */
// 9. Find Keys with a Specific Value in an Object
// Write a function that returns an array of keys where the value matches a given condition (e.g., all keys with the value 10).

// Example:
// js
// Copy
// Edit
// findKeys({ a: 10, b: { c: 10, d: 20 }, e: 10 }, 10);
// // Output: ["a", "b.c", "e"]
// 10. Get Object Difference (Diff Function)
// Write a function that finds the difference between two objects and returns the keys that have different values.

// Example:
// js
// Copy
// Edit
// diffObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 5, d: 4 });
// // Output: { b: [2, 5], c: [3, undefined], d: [undefined, 4] }
// 11. Remove Keys from an Object Based on a Condition
// Write a function that removes all keys in an object where the value is null, undefined, or false.

// Example:
// js
// Copy
// Edit
// cleanObject({ a: 1, b: null, c: undefined, d: false, e: "hello" });
// // Output: { a: 1, e: "hello" }
// 12. Generate a Nested Object from an Array of Keys
// Write a function that converts an array of keys into a nested object where each key points to the next key, and the last key points to a given value.

// Example:
// js
// Copy
// Edit
// generateObject(["a", "b", "c"], 10);
// // Output: { a: { b: { c: 10 } } }
// 13. Check if Two Objects are Structurally Similar
// Write a function that checks if two objects have the same structure (keys and nested structure), ignoring values.

// Example:
// js
// Copy
// Edit
// sameStructure({ a: { b: 1 }, c: 2 }, { a: { b: 10 }, c: 20 });
// // Output: true
// 14. Convert an Object to a Nested Array
// Convert an object into a nested array representation.

// Example:
// js
// Copy
// Edit
// toNestedArray({ a: 1, b: { c: 2, d: { e: 3 } } });
// /* Output:
// [
//   ["a", 1],
//   ["b", [
//     ["c", 2],
//     ["d", [
//       ["e", 3]
//     ]]
//   ]]
// ]
// */
// 15. Deep Freeze an Object (Prevent Any Modifications)
// Write a function that deeply freezes an object to make it immutable.

// Example:
// js
// Copy
// Edit
// const obj = deepFreeze({ a: { b: { c: 1 } } });
// obj.a.b.c = 2; // Error: Cannot modify a frozen object */
