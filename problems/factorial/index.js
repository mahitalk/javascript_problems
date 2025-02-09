// factorial of a number

function factorial(number) {
  let fact = 1;
  for (let i = number; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

function recursionFactorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * recursionFactorial(number - 1);
}

function reverse(string) {
  if (string === "") {
    return "";
  }

  return;
}

const factorialNumber1 = factorial(5);
const factorialNumber2 = factorial(111);
const factorialNumber3 = factorial(99);
const factorialNumber4 = factorial(2);
const factorialNumber5 = factorial(0);

console.log("factorialNumber1", factorialNumber1);
console.log("factorialNumber2", factorialNumber2);
console.log("factorialNumber3", factorialNumber3);
console.log("factorialNumber4", factorialNumber4);
console.log("factorialNumber5", factorialNumber5);
