/*
Find Maximum
Description: Find the largest number in an array.
Example Input: [1, 3, 7, 2]
Example Output: 7
*/

function maximumNumber(arr) {
  let maxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    } else {
      maxNumber = maxNumber;
    }
  }
  return maxNumber;
}
let arr1 = [1, 3, 7, 2];
console.log(maximumNumber(arr1));
let arr2 = [87, 654, 87, 4];
console.log(maximumNumber(arr2));
let arr3 = [78, 56, 24, 92];
console.log(maximumNumber(arr3));
let arr4 = [19, 35, 72, 20];
console.log(maximumNumber(arr4));
let arr5 = [11, 56, 78, -901];
console.log(maximumNumber(arr5));
