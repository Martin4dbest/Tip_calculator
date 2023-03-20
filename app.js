let bill = document.getElementById("inputAmount");
let numberOfPeople = document.getElementById("No_of_people_input");
let contentFooterAmount1 = document.getElementById("content_footer--amount1");
let contentFooterAmount2 = document.getElementById("content_footer--amount2");
let resetButton = document.getElementById("reset_button");

function calculate(number) {
  // Attach an event listener to the input element for tracking its value changes
  numberOfPeople.addEventListener("input", () => {
    console.log(numberOfPeople.value); // log the current value of the input element
  });

  let resultTwo = bill.value / 100 * number;
  let total = number / numberOfPeople.value;
  let result = bill.value / 100 * total;
  let subTotalFormatted = parseFloat(result).toFixed(2);
  result = subTotalFormatted;

  console.log(subTotalFormatted);

  function displayAnswer() {
    contentFooterAmount1.innerHTML = `$ ${result}`;
    contentFooterAmount2.innerHTML = `$ ${resultTwo}`;

    resetButton.addEventListener("click", () => {
      contentFooterAmount1.innerHTML = "$0.00";
      contentFooterAmount2.innerHTML = "$0.00";
      const message = prompt("Enter your name:");
      alert(`Hello, ${message}!`);
    });
  }

  displayAnswer();
}

// Call the function with a sample argument
calculate(10);


