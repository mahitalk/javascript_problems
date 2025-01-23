const EVEN = "even";
const ODD = "odd";

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return EVEN;
  } else {
    return ODD;
  }
}
const test1 = evenOrOdd(5);
const test2 = evenOrOdd(2);
const test3 = evenOrOdd(12.6);

const test4 = evenOrOdd(17);

const test5 = evenOrOdd(12);

console.log(`5 is ${test1}`);
console.log(`2 is ${test2}`);
console.log(`12.6 is ${test3}`);
console.log(`17 is ${test4}`);
console.log(`12 is ${test5}`);
