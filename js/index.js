console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorDisplay = document.querySelector("p.error");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }
      return a / b;
    } catch (error) {
      errorDisplay.textContent = error.message;
      //To display a additional error message otherwise out would be undefined at every error
      return "Error! 🤯⛔️♾️";
    }
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //To unset the error message if it got set before
  errorDisplay.textContent = "";

  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});
