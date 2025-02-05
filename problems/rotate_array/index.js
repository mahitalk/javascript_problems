/*
Rotate Array
Description: Rotate an array to the left by k steps.
Example Input: [1, 2, 3, 4, 5], k = 2
Example Output: [3, 4, 5, 1, 2]  // not done
*/

function rotateArray(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i - k];
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2));
