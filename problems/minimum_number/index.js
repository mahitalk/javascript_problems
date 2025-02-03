/*
Find Minimum
Description: Find the smallest number in an array.
Example Input: [8, 4, 2, 6]
Example Output: 2
*/

function minimumNumber(arr) {
  let minimumNumber = 9999999;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > minimumNumber) {
      minimumNumber = minimumNumber;
    } else {
      minimumNumber = arr[i];
    }
  }
  return minimumNumber;
}
let arr1 = [1, 3, 7, 2];
console.log(minimumNumber(arr1));
let arr2 = [87, 654, 87, 4];
console.log(minimumNumber(arr2));
let arr3 = [78, 56, 24, 92];
console.log(minimumNumber(arr3));
let arr4 = [19, 35, 72, 20];
console.log(minimumNumber(arr4));
let arr5 = [11, 56, 78, -901];
console.log(minimumNumber(arr5));
