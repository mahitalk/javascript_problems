/*
Find Second Largest
Description: Find the second largest number in an array.
Example Input: [12, 34, 23, 56]
Example Output: 34
*/

function secondLargest(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr[arr.length - 2];
}
let arr = [12, 34, 23, 56];
console.log(secondLargest(arr));
let arr1 = [1, 3, 7, 2];
console.log(secondLargest(arr1));
let arr2 = [87, 654, 87, 4];
console.log(secondLargest(arr2));
let arr3 = [78, 56, 24, 92];
console.log(secondLargest(arr3));
let arr4 = [19, 35, 72, 20];
console.log(secondLargest(arr4));
let arr5 = [11, 56, 78, -901];
console.log(secondLargest(arr5));
