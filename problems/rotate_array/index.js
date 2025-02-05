/*
Rotate Array
Description: Rotate an array to the left by k steps.
Example Input: [1, 2, 3, 4, 5], k = 2
Example Output: [3, 4, 5, 1, 2]  // not done
*/

function rotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
let arr1 = [1, 2, 3, 4, 5];
console.log(rotateArray(arr1, 2));

let arr2 = [42];
console.log(rotateArray(arr2, 3));

let arr3 = [10, 20, 30, 40];
console.log(rotateArray(arr3, 0));

let arr4 = [5, 10, 15, 20];
console.log(rotateArray(arr4, 4));

let arr5 = [7, 14, 21, 28, 35];
console.log(rotateArray(arr5, 7));
