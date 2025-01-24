// LCM of Two Numbers
function lcmOfNumbers(a, b) {
  for (let i = 2; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
}
console.log(lcmOfNumbers(78, 221));
console.log(lcmOfNumbers(7898, 78));
