// Armstrong Number
// // (1 ^ 3) + (5 ^ 3) + (3 ^ 3);

function armstrongNumber(number) {
  let numberArray = number.toString().split("").map(Number);
  let finalSum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    let digitPoweredLength = 1;
    for (let j = 0; j < numberArray.length; j++) {
      digitPoweredLength *= numberArray[i];
    }
    finalSum = finalSum + digitPoweredLength;
  }
  if (finalSum == number) {
    return "Armstrong";
  }
  return "Not a Armstrong";
}
console.log(armstrongNumber(153));
