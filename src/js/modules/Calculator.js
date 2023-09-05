// let cost = document.querySelector('.mortgage__input-cost');
// let costRange = document.querySelector('.mortgage__cost-range');
// let payment = document.querySelector('.mortgage__input-payment');
// let paymentRange = document.querySelector('.mortgage__payment-range');
// let term = document.querySelector('.mortgage__input-term');
// let pay = document.querySelector('.mortgage__input-pay');


// let eshi_stavka = 12/12/10;
// let obsh_stavka = Math.pow((1 + eshi_stavka),term.value*12);
// let eshi_platesh = Math.round((cost.value - payment.value) * eshi_stavka * obsh_stavka / (obsh_stavka - 1)) + " ₽/мес";
// pay.value = eshi_platesh;

// costRange.oninput = function(){
//   cost.value = costRange.value;
//   pay.value = eshi_platesh;
// }

// paymentRange.oninput = function(){
//   payment.value = paymentRange.value;
//   pay.value = eshi_platesh;
// }

// cost.oninput = function(){
//   pay.value = eshi_platesh;
// }

// cost.addEventListener("oninput", () => {
//   pay.value = eshi_platesh;
// })

// ----------------------------------------------------------------------------------------------------------------------------------------
let cost = document.querySelector('.mortgage__input-cost');
let costRange = document.querySelector('.mortgage__cost-range');
let payment = document.querySelector('.mortgage__input-payment');
let paymentRange = document.querySelector('.mortgage__payment-range');
let term = document.querySelector('.mortgage__input-term');
let pay = document.querySelector('.mortgage__input-pay');

let ranges = [costRange, paymentRange, term, cost, payment];

function calculator(){
  term = parseInt(term.value.match(/\d+/));
  let eshi_stavka = 12/12/term;
  let obsh_stavka = Math.pow((1 + eshi_stavka),term*12);
  let eshi_platesh = Math.round((cost.value - payment.value) * eshi_stavka * obsh_stavka / (obsh_stavka - 1)) + " ₽/мес";
  pay.innerHTML = eshi_platesh;

  ranges.forEach((elem) => {
    elem.oninput = function(){
      cost.value = costRange.value;
      payment.value = paymentRange.value;
      term = document.querySelector('.mortgage__input-term');
      term = parseInt(term.value.match(/\d+/));
      eshi_stavka = 12/12/term;
      obsh_stavka = Math.pow((1 + eshi_stavka),term*12);
      eshi_platesh = Math.round((cost.value - payment.value) * eshi_stavka * obsh_stavka / (obsh_stavka - 1));
      if (eshi_platesh < 0 || isNaN(eshi_platesh) === true) eshi_platesh = 0;
      eshi_platesh = eshi_platesh + " ₽/мес";
      pay.innerHTML = eshi_platesh;
    }
  })
}
calculator()


// ------------------------------------------------------------------------------------------
// let cost = document.querySelector('.mortgage__input-cost');
// let costRange = document.querySelector('.mortgage__cost-range');
// let payment = document.querySelector('.mortgage__input-payment');
// let paymentRange = document.querySelector('.mortgage__payment-range');
// let term = document.querySelector('.mortgage__input-term');
// let pay = document.querySelector('.mortgage__input-pay');

// let inputs = [cost, costRange, payment, paymentRange, term, pay];

// inputs.forEach((elem) => {
//   let eshi_stavka = 12/12/10;
//   let obsh_stavka = Math.pow((1 + eshi_stavka),term.value*12);
//   // let eshi_platesh = Math.round((cost.value - payment.value) * eshi_stavka * obsh_stavka / (obsh_stavka - 1)) + " ₽/мес";
//   let eshi_platesh = Math.round((cost.value - payment.value) * eshi_stavka * obsh_stavka / (obsh_stavka - 1));
//   pay.value = eshi_platesh;
  
//   elem.oninput = function(){

//   }
// })