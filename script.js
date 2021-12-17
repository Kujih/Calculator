const numbers = document.querySelectorAll (.number);

numbers.forEach ((number) => {
  number.addEventListener("click", (event) => {
    console log (event.target.value);
  })
})

const calculatorScreen = document.querySelectorAll ('.calculator-screen');

const updateScreen = (number) => {
  calculatorScreen.value = number;
}

numbers.forEach ((number) => {
  number.addEventListener("click", (event) => {
    console log (event.target.value);
  })
})
