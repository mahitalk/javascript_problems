/*
Array Sum
Description: Calculate the sum of all numbers in an array.
Example Input: [4, 5, 6]
Example Output: 15
*/

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
arr1 = [4, 5, 6];
console.log(arraySum(arr1));
