//Calculation functions - business logic
function multiply(amount, tipAmount){
  return amount * tipAmount;
}
function add(firstAmount, secondAmount){
  return firstAmount + secondAmount;
}
function divide(firstAmount,secondAmount){
  return firstAmount / secondAmount;
}
function formatDecimals(amount){
  return amount.toFixed(2);
}
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
   const tip = divide(parseFloat($('.tipRate').value), 100);
   const tipAmount = multiply(bill,tip);
   const total = add(bill, tipAmount);

  //output calculations
   $('.billOutput').textContent  = `$${formatDecimals(bill)}`;
   $('.tipOutput').textContent   = `$${formatDecimals(tipAmount)}`;
   $('.totalOutput').textContent = `$${formatDecimals(total)}`;
   $('.tipPercent').textContent  = `${formatDecimals(tip)}%`;

   //show answer and handle erroroneous input
   showAnswer();
   (bill > 0 && tip > 0) || warn();
});
