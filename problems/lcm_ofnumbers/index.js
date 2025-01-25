// LCM of Two Numbers
function lcmOfNumbers(a, b) {
  let arr = [];
  for (let i = 2; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      arr.push(i);
    }
  }
  return (a * b) / arr[arr.length - 1];
}
console.log(lcmOfNumbers(4, 6));
console.log(lcmOfNumbers(11, 22));
console.log(lcmOfNumbers(2, 3)); // not working
console.log(lcmOfNumbers(17, 2)); // not working
