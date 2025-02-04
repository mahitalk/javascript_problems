/*
Find Index
Description: Find the index of a given number in an array.
Example Input: [10, 20, 30], target = 20
Example Output: 1
*/

function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return i;
    }
  }
}
let arr1 = [10, 20, 30];
console.log(findIndex(arr1, 20));

let arr2 = [10, 20, 30, 78, 90];
console.log(findIndex(arr2, 10));

let arr3 = [87, 43, 90, 32];
console.log(findIndex(arr3, 90));

let arr4 = [8, 5, 43, 98];
console.log(findIndex(arr4, 98));

let arr5 = [67, 56, 34, 78];
console.log(findIndex(arr5, 34));
