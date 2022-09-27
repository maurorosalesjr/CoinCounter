// recursive JS that takes X amount of money and then converts it into change


function recursiveCoinCounter(amount){
if(amount >= .25){
  quarters = Math.floor(amount/.25);
  console.log(amount);
  return (`${quarters} Quarters, ` + recursiveCoinCounter(amount - (quarters * .25)));
} if(amount >= .1){
  dimes = Math.floor(amount/.1);
  console.log(amount);
  return (`${dimes} Dimes, ` + recursiveCoinCounter(amount - (dimes * .1)));
} if(amount >= .05){
  nickles = Math.floor(amount/.05);
  console.log(amount);
  return (`${nickles} Nickles, ` + recursiveCoinCounter(amount - (nickles * .05)));
} else {
  pennies = Math.floor(amount/.01);
  console.log(amount);
  return (`${pennies} Pennies`);
}
}
// there is a rounding error i can't fix at this moment
