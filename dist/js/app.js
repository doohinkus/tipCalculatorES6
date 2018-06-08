'use strict';

//Calculation functions - business logic
function multiply(amount, tipAmount) {
  return amount * tipAmount;
}
function add(firstAmount, secondAmount) {
  return firstAmount + secondAmount;
}
function divide(firstAmount, secondAmount) {
  return firstAmount / secondAmount;
}
function formatDecimals(amount) {
  return amount.toFixed(2);
}
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
  var tip = divide(parseFloat($('.tipRate').value), 100);
  var tipAmount = multiply(bill, tip);
  var total = add(bill, tipAmount);

  //output calculations
  $('.billOutput').textContent = '$' + formatDecimals(bill);
  $('.tipOutput').textContent = '$' + formatDecimals(tipAmount);
  $('.totalOutput').textContent = '$' + formatDecimals(total);
  $('.tipPercent').textContent = formatDecimals(tip) + '%';

  //show answer and handle erroroneous input
  showAnswer();
  bill > 0 && tip > 0 || warn();
});