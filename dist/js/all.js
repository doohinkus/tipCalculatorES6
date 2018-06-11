'use strict';

//import calculation functions - business logic
var functions = require('./functions.js');

//DOM manipulation--Simulate JQuery syntax
var $ = function $(c) {
  return document.querySelector(c);
};
//Modal
var displayModal = function displayModal() {
  $('#myModal').style.display = "block";
  $('.modal .modal-content').classList.add('slide');
};
var hideModal = function hideModal() {
  $('#myModal').style.display = "none";
  $('.billAmount').focus();
};
var warn = function warn() {
  $('.output').style.display = 'none';
  $('.error').style.display = "block";
  $('#myModal').classList.remove('slide');
  displayModal();
};

$('.close').addEventListener('click', function (e) {
  hideModal();
});

$('#myModal').addEventListener('click', function (e) {
  hideModal();
});

var showAnswer = function showAnswer() {
  $('.error').style.display = "none";
  $('.output').style.display = '';
  displayModal();
};

//Main interface - handle user input
$('.form').addEventListener('submit', function (e) {
  e.preventDefault();

  //grab values from form
  var bill = parseFloat($('.billAmount').value);
  var tip = functions.divide(parseFloat($('.tipRate').value), 100);
  var tipAmount = functions.multiply(bill, tip);
  var total = functions.add(bill, tipAmount);

  //output calculations
  $('.billOutput').textContent = '$' + functions.formatDecimals(bill);
  $('.tipOutput').textContent = '$' + functions.formatDecimals(tipAmount);
  $('.totalOutput').textContent = '$' + functions.formatDecimals(total);
  $('.tipPercent').textContent = functions.formatDecimals(tip) * 100 + '%';

  //show answer and handle erroroneous input
  showAnswer();
  bill > 0 && tip > 0 || warn();
});
"use strict";

module.exports = {
  multiply: function multiply(amount, tipAmount) {
    return amount * tipAmount;
  },
  add: function add(firstAmount, secondAmount) {
    return firstAmount + secondAmount;
  },
  divide: function divide(firstAmount, secondAmount) {
    return firstAmount / secondAmount;
  },
  formatDecimals: function formatDecimals(amount) {
    return parseFloat(amount).toFixed(2);
  }
};
//# sourceMappingURL=all.js.map
