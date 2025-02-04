/*
Remove Duplicates
Description: Remove duplicate elements from an array.
Example Input: [1, 2, 2, 3]
Example Output: [1, 2, 3]
*/

function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let arr1 = [1, 2, 2, 3];
console.log(removeDuplicates(arr1));
let arr2 = [5, 7, 8, 5, 9, 8];
console.log(removeDuplicates(arr2));
let arr3 = [3, 3, 3, 3, 3];
console.log(removeDuplicates(arr3));
let arr4 = [-1, -2, -3, -1];
console.log(removeDuplicates(arr4));
let arr5 = [0, 1, 2, 0, 3];
console.log(removeDuplicates(arr5));
