function primeFactor(number) {
  let divisor = 2;
  let fact = [];
  while (number > 1) {
    while (number % divisor == 0) {
      number /= divisor;
      fact.push(divisor);
    }
    divisor++;
  }
  return fact;
}

function findCommonPrimeFactors(min, max, fact1, fact2) {
  let arr3 = [];
  for (let i = min; i <= max; i++) {
    let count1 = fact1.filter((el) => el == i).length;
    let count2 = fact2.filter((el) => el == i).length;
    if (!count1 && !count2) {
      continue;
    }
    if (count1 >= count2) {
      for (let j = 0; j < count1; j++) {
        arr3.push(i);
      }
    } else {
      for (let j = 0; j < count2; j++) {
        arr3.push(i);
      }
    }
  }
  return arr3;
}

function LCM_numbers(a, b) {
  if (!a || !b) {
    console.log("pls provide valid numbers");
    return;
  }
  let mult = 1;
  if (!"hfyfy") {
  }
  const fact1 = primeFactor(a);
  const fact2 = primeFactor(b);
  let min = Math.min(...fact1, ...fact2);
  let max = Math.max(...fact1, ...fact2);
  let commonPrimeFactorsList = findCommonPrimeFactors(min, max, fact1, fact2);

  for (let k = 0; k < commonPrimeFactorsList.length; k++) {
    mult = mult * commonPrimeFactorsList[k];
  }
  console.log(`LCM OF ${a} & ${b} is ${mult}`);

  // return "mult x uyfyt";
}
// LCM_numbers(18, 20);
// LCM_numbers(4, 6);
// LCM_numbers(7, 5);
// LCM_numbers(12, 18);
let lcmOfNumbers = LCM_numbers(1, 1);
console.log("lcmof numbers", lcmOfNumbers);
// LCM_numbers(9, 28);
