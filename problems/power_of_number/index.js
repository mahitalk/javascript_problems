// Power of a Number

function numberPower(a, b) {
  let number = 1;
  for (let i = 0; i < b; i++) {
    number *= a;
  }
  return number;
}
console.log(numberPower(2, 3));
