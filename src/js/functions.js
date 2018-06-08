module.exports = {
  multiply: function (amount, tipAmount){
    return amount * tipAmount;
  },
  add: function (firstAmount, secondAmount){
    return firstAmount + secondAmount;
  },
  divide: function (firstAmount,secondAmount){
    return firstAmount / secondAmount;
  },
  formatDecimals: function (amount){
    return amount.toFixed(2);
  }
}
