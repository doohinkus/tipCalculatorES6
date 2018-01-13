const $ = (c) => {
  return document.querySelector(c);
}
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
const showAnswer = () => {
 $('.error').style.display = "none";
 $('.output').style.display    = '';
 displayModal();
}
const calculate = () => {
     let tip             = 0;
     let total           = 0;
     let billAmount      = $('.billAmount').value;
     let tipRate         = $('.tipRate').value;

     billAmount          = parseFloat(billAmount);
     tipRate             = parseFloat(tipRate)/100;

     tip                 = tipRate * billAmount;
     total               = tip + billAmount;

     return {
       tip                 : tip.toFixed(2),
       billAmount          : billAmount.toFixed(2),
       total               : total.toFixed(2),
       tipRate             : tipRate.toFixed(2)
     }
}


$('.form').addEventListener('submit', (e) => {
   e.preventDefault();
   const answer = calculate();

   $('.billOutput').textContent  = `$${answer.billAmount}`;
   $('.tipOutput').textContent   = `$${answer.tip}`;
   $('.totalOutput').textContent = `$${answer.total}`;
   $('.tipPercent').textContent  = `${answer.tipRate * 100}%`
   showAnswer();
   (answer.billAmount>0 && answer.tipRate >0) || warn();
});

$('.billAmount').focus();

$('.close').addEventListener('click', (e) => {
   hideModal();
});

$('#myModal').addEventListener('click', (e) => {
   hideModal();
});
