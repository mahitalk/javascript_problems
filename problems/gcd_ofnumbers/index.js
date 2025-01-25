// GCD of Two Numbers
function gcdOfNumbers(a, b) {
  let arr = [];
  for (let i = 2; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      arr.push(i);
    }
  }
  return arr[arr.length - 1];
}
console.log(gcdOfNumbers(12, 18));
console.log(gcdOfNumbers(7898, 78));
