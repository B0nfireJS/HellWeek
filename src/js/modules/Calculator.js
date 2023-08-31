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

cost.oninput = calculator;

function calculator(){
  cost = document.querySelector('.mortgage__input-cost');
  costRange = document.querySelector('.mortgage__cost-range');
  payment = document.querySelector('.mortgage__input-payment');
  paymentRange = document.querySelector('.mortgage__payment-range');
  term = document.querySelector('.mortgage__input-term');
  pay = document.querySelector('.mortgage__input-pay');

  let eshi_stavka = 12/12/10;
  let obsh_stavka = Math.pow((1 + eshi_stavka),term.value*12);
  let eshi_platesh = Math.round((cost.value - payment.value) * eshi_stavka * obsh_stavka / (obsh_stavka - 1)) + " ₽/мес";
  pay.value = eshi_platesh;

  costRange.oninput = function(){
    cost.value = costRange.value;
    pay.value = eshi_platesh;
  }
  
  paymentRange.oninput = function(){
    payment.value = paymentRange.value;
    pay.value = eshi_platesh;
  }
  
  cost.oninput = function(){
    pay.value = eshi_platesh;
  }

  cost.addEventListener("oninput", () => {
    pay.value = eshi_platesh;
    console.log(pay.value);
  })
}
calculator()

console.log(pay)


