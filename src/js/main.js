function calculate() {

  var lumpSumPenalty = 0.54,
  capitalGainsTax  = 0.33,
  preTaxLumpSum,
  cashLumpSum;

  preTaxLumpSum = pot * (1 - lumpSumPenalty.value);
  cashLumpSum = preTaxLumpSum * (1 - capitalGainsTax.value);
  console.log('boop');
  return cashLumpSum;
}

var lotteryWinAmount;
lotteryWinAmount = document.getElementById('potValue').value;

calculate(lotteryWinAmount);
