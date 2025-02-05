/*
Count Occurrences
Description: Count the occurrences of each element in an array.
Example Input: [1, 2, 2, 3, 3, 3]
Example Output: {1: 1, 2: 2, 3: 3} 
*/

function countOccurences(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let count = arr.filter((el) => el == arr[i]).length;
    obj[arr[i]] = count;
  }
  return obj;
}
let arr1 = [1, 9, 2, 3, 3, 8, 5, 3, 2, 4, 6, 7, 9, 5, 7, 6];
console.log(countOccurences(arr1));
let arr2 = [1, 2, 2, 3, 3, 3];
console.log(countOccurences(arr2));
