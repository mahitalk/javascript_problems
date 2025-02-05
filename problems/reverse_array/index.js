/*
Reverse Array
Description: Reverse the elements in an array.
Example Input: [1, 2, 3]
Example Output: [3, 2, 1] // not done
*/

function reverse_array(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
let arr1 = [1, 2, 3, 4];
console.log(reverse_array(arr1));

let arr2 = [10, 20, 30, 40, 50];
console.log(reverse_array(arr2));

let arr3 = [7];
console.log(reverse_array(arr3));

let arr4 = [];
console.log(reverse_array(arr4));

let arr5 = [1, 2, 2, 3, 3, 4];
console.log(reverse_array(arr5));
