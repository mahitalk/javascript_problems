function primeNumberChecker(Number) {
  let isPrime = true;
  if (Number < 1) {
    return "please give a valid input";
  }
  for (let i = 2; i < Number; i++) {
    if (Number % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
const primeNumber1 = primeNumberChecker(0.1);
const primeNumber2 = primeNumberChecker(10);
const primeNumber3 = primeNumberChecker(11);

console.log("primeNumber1:", primeNumber1);
console.log("primeNumber2:", primeNumber2);
console.log("primeNumber3:", primeNumber3);
