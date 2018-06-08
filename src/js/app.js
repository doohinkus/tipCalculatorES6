//import calculation functions - business logic
const functions = require('./functions.js');

//DOM manipulation--Simulate JQuery syntax
const $ = (c) => {
  return document.querySelector(c);
}
//Modal
const displayModal = () => {
 $('#myModal').style.display = "block";
 $('.modal .modal-content').classList.add('slide');
}
const hideModal = () => {
 $('#myModal').style.display = "none";
 $('.billAmount').focus();
}
const warn = () => {
 $('.output').style.display    = 'none';
 $('.error').style.display = "block";
 $('#myModal').classList.remove('slide');
 displayModal();
}

$('.close').addEventListener('click', (e) => {
   hideModal();
});

$('#myModal').addEventListener('click', (e) => {
   hideModal();
});

const showAnswer = () => {
 $('.error').style.display = "none";
 $('.output').style.display    = '';
 displayModal();
}

//Main interface - handle user input
$('.form').addEventListener('submit', (e) => {
   e.preventDefault();

   //grab values from form
   const bill = parseFloat($('.billAmount').value);
   const tip = functions.divide(parseFloat($('.tipRate').value), 100);
   const tipAmount = functions.multiply(bill,tip);
   const total = functions.add(bill, tipAmount);

  //output calculations
   $('.billOutput').textContent  = `$${functions.formatDecimals(bill)}`;
   $('.tipOutput').textContent   = `$${functions.formatDecimals(tipAmount)}`;
   $('.totalOutput').textContent = `$${functions.formatDecimals(total)}`;
   $('.tipPercent').textContent  = `${functions.formatDecimals(tip)}%`;

   //show answer and handle erroroneous input
   showAnswer();
   (bill > 0 && tip > 0) || warn();
});
