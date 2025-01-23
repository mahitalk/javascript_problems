// sum of n natural numbers

function sumNaturalNumbers(numbers) {
  let sum = 0;
  for (let i = 1; i <= numbers; i++) {
    sum = sum + i;
  }
  return sum;
}
const naturalNumbersSum1 = sumNaturalNumbers(15);
const naturalNumbersSum2 = sumNaturalNumbers(999);
const naturalNumbersSum3 = sumNaturalNumbers(69);
const naturalNumbersSum4 = sumNaturalNumbers(17);
const naturalNumbersSum5 = sumNaturalNumbers(199);

console.log("naturalNumbersSum1", naturalNumbersSum1);
console.log("naturalNumbersSum2", naturalNumbersSum2);
console.log("naturalNumbersSum3", naturalNumbersSum3);
console.log("naturalNumbersSum4", naturalNumbersSum4);
console.log("naturalNumbersSum5", naturalNumbersSum5);
