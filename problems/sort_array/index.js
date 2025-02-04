/*
Sort Array
Description: Sort an array in ascending order.predefined function not use.
Example Input: [4, 2, 9, 1]
Example Output: [1, 2, 4, 9]
*/

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let arr1 = [5, 2, 9, 1, 5, 6];
console.log(sortArray(arr1));

let arr2 = [4, 8, 1, 3, 9];
console.log(sortArray(arr2));

let arr3 = [-3, 7, -1, 5, -2];
console.log(sortArray(arr3));

let arr4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log(sortArray(arr4));

let arr5 = ["banana", "apple", "cherry", "date"];
console.log(sortArray(arr5));
