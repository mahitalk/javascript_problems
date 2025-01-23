// sum of digits

function sumOfDigits(digit) {
  let digitArr = digit
    .toString()
    .split("")
    .map((el) => Number(el));

  let sum = 0;
  for (let i = 0; i < digitArr.length; i++) {
    sum += digitArr[i];
  }
  return sum;
}
console.log(sumOfDigits(123));
