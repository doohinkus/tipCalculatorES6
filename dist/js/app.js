'use strict';

var $ = function $(c) {
  return document.querySelector(c);
};
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
var showAnswer = function showAnswer() {
  $('.error').style.display = "none";
  $('.output').style.display = '';
  displayModal();
};
var calculate = function calculate() {
  var tip = 0;
  var total = 0;
  var billAmount = $('.billAmount').value;
  var tipRate = $('.tipRate').value;

  billAmount = parseFloat(billAmount);
  tipRate = parseFloat(tipRate) / 100;

  tip = tipRate * billAmount;
  total = tip + billAmount;

  return {
    tip: tip.toFixed(2),
    billAmount: billAmount.toFixed(2),
    total: total.toFixed(2),
    tipRate: tipRate.toFixed(2)
  };
};

$('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  var answer = calculate();

  $('.billOutput').textContent = '$' + answer.billAmount;
  $('.tipOutput').textContent = '$' + answer.tip;
  $('.totalOutput').textContent = '$' + answer.total;
  $('.tipPercent').textContent = answer.tipRate * 100 + '%';
  showAnswer();
  answer.billAmount > 0 && answer.tipRate > 0 || warn();
});

$('.billAmount').focus();

$('.close').addEventListener('click', function (e) {
  hideModal();
});

$('#myModal').addEventListener('click', function (e) {
  hideModal();
});