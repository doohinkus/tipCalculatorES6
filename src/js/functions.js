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
    return parseFloat(amount).toFixed(2);
  }
}
