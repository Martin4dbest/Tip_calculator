let bill = document.getElementById("inputAmount");
let numberOfPeople = document.getElementById ("No_of_people_input");

// percentage buttons
let tipValue = 0;
let percentageButtons = Array.from(document.querySelectorAll('.percentage-button'));
let customPercentageButton = document.getElementById("custom");

// let contentFooterAmount = document.getElementsByClassName ("content_footer--amount"); 
let contentFooterAmount1 = document.getElementById ("content_footer--amount1");
let contentFooterAmount2 = document.getElementById ("content_footer--amount2");
let resetButton = document.getElementById("reset_button");




// function calculate(number) {

//     numberOfPeople.addEventListener('click', () =>{
//         numberOfPeople.innerHTML = numberOfPeople.value;
//         console.log(numberOfPeople);
//     })
   
//     let resultTwo = bill.value/100*number;
//     let total=number/numberOfPeople.value;
//     let result=bill.value/100*total;
//     let subTotalFormatted=parseFloat(result).toFixed(2);
//     result= subTotalFormatted


//     console.log(subTotalFormatted)

//     let displayAnswer =() =>{
//         contentFooterAmount1.innerHTML=`$ ${result}`
//         contentFooterAmount2.innerHTML=`$ ${resultTwo}`;
        
    
//         resetButton.addEventListener('click', ()=>{
//             // contentFooterAmount1.innerHTML='$0.00'
//             // contentFooterAmount2.innerHTML='$0.00'
//             const message = prompt('Enter your name:');
//             alert(`Hello, ${message}!`);
//         })
        
//     displayAnswer();        
            
//     }

    
    
   

// } 
// console.log(answer); 

// input field values
let billValue;
let amountOfPeopleValue = 1;

let customValue;

// input field eventlisteners
bill.addEventListener('input', () => {
    billValue = bill.value;
    console.log(billValue);
    if(amountOfPeopleValue != 0){
      updateTotal();
      updateTipAmount();
    }
  });
  
  numberOfPeople.addEventListener('input', () => {
    amountOfPeopleValue = numberOfPeople.value;
    console.log(amountOfPeopleValue);
    if(amountOfPeopleValue != 0){
      updateTotal();
      updateTipAmount();
    }
  });


  //percentage buttons eventlisteners
    percentageButtons.forEach(button => {
    button.addEventListener('click', () => {
      if(billValue != null && amountOfPeopleValue != null){
        // resetPercentageButtons();
        tipValue = button.innerHTML.replace('%', '');
        button.classList.add('percent-button-active');
        updateTipAmount();
      }
    });
  });


  // custom button eventlistener
customPercentageButton.addEventListener('input', () => {
    customValue = customPercentageButton.value;
    tipValue = customPercentageButton.value;
    // console.log(customValue);
    resetPercentageButtons();
//   customPercentageButton.innerHTML = `<input type="text">`
//   let customPercentageInput = customPercentageButton.childNodes[0];
//   customPercentageInput.focus();
//   customPercentageInput.addEventListener('input', () => {
//     tipValue = customPercentageInput.value;
//     customPercentageButton.classList.add('percent-button-active');
//     updateTipAmount();
//   });
    updateTipAmount();

});
  


  function updateTotal(){
    contentFooterAmount1.innerHTML = '';
    contentFooterAmount2.innerHTML = `$${billValue / amountOfPeopleValue}`;
  }
  
  function updateTipAmount(){
    contentFooterAmount1.innerHTML = '';
    contentFooterAmount1.innerHTML = `$${(billValue / 100 * tipValue) / amountOfPeopleValue}`;
  }

// reset button eventlistener
        resetButton.addEventListener('click', ()=>{
            contentFooterAmount1.innerHTML = '$0.00';
            contentFooterAmount2.innerHTML = '$0.00';
            bill.value = '';
            numberOfPeople.value = '';
            billValue = null;
            amountOfPeopleValue = null;
            // resetPercentageButtons();
            
        })