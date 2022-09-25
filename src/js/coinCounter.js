// non recursive intermediate JS 

let coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};


function coinCounter(amount){
  amount = amount * 100;

  coinPurse.quarters = Math.floor(amount/25);
  amount = amount % 25;

  coinPurse.dimes = Math.floor(amount/10);
  amount = amount % 10;

  coinPurse.nickels = Math.floor(amount/5);
  amount = amount % 5;

  coinPurse.pennies = amount;

  return coinPurse;
}

