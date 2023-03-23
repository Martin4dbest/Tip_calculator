let bill = document.getElementById("inputAmount");
let numberOfPeople = document.getElementById ("No_of_people_input");

//This is the percentage buttons
let tipValue = 0;
let percentageButtons = Array.from(document.querySelectorAll('.percentage-button'));
let customPercentageButton = document.getElementById("custom");

let contentFooterAmount1 = document.getElementById("content_footer--amount1");
let contentFooterAmount2 = document.getElementById("content_footer--amount2");
let resetButton = document.getElementById("reset_button");

let billValue;
let amountOfPeopleValue = 1;
let customValue;

bill.addEventListener('input', () => {
  billValue = bill.value;
  if(amountOfPeopleValue != 0){
    updateTotal();
    updateTipAmount();
  }
});

numberOfPeople.addEventListener('input', () => {
  amountOfPeopleValue = numberOfPeople.value;
  if(amountOfPeopleValue != 0){
    updateTotal();
    updateTipAmount();
  }
});

percentageButtons.forEach(button => {
  button.addEventListener('click', () => {
    if(billValue != null && amountOfPeopleValue != null){
      resetPercentageButtons();
      tipValue = button.innerHTML.replace('%', '');
      button.classList.add('percent-button-active');
      updateTipAmount();
    }
  });
});

customPercentageButton.addEventListener('input', () => {
  customValue = customPercentageButton.value;
  tipValue = customValue;
  updateTipAmount();
});

function resetPercentageButtons(){
  percentageButtons.forEach(button => {
    button.classList.remove('percent-button-active');
  });
}

function updateTotal(){
  contentFooterAmount1.innerHTML = '';
  contentFooterAmount2.innerHTML = `$${billValue / amountOfPeopleValue}`;
}

function updateTipAmount(){
  let tipAmount = (billValue / 100 * tipValue) / amountOfPeopleValue;
  contentFooterAmount1.innerHTML = `$${tipAmount.toFixed(2)}`;
}

resetButton.addEventListener('click', ()=>{
  contentFooterAmount1.innerHTML = '$0.00';
  contentFooterAmount2.innerHTML = '$0.00';
  bill.value = '';
  numberOfPeople.value = '';
  billValue = null;
  amountOfPeopleValue = null;
  resetPercentageButtons();          
});
