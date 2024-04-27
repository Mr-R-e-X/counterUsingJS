let counterDisplay = document.querySelector("#counter-display");
let counterSpan = document.querySelector("#counter");
let decrementBtn = document.querySelector("#decrement");
let incrementBtn = document.querySelector("#increment");
let clearBtn = document.querySelector("#clear");

let errorDisplay = document.createElement("p");
errorDisplay.setAttribute("id", "error-display");
errorDisplay.innerText = `Error: Can't go below 0`;
errorDisplay.style.display = "none";
counterDisplay.appendChild(errorDisplay);
let counter = 0;

incrementBtn.addEventListener("click", (e) => {
  if (counter >= 0) {
    errorDisplay.style.display = "none";
  }
  counter += 1;
  counterSpan.innerHTML = counter;
});
decrementBtn.addEventListener("click", (e) => {
  if (counter > 0) {
    counter -= 1;
    counterSpan.innerHTML = counter;
  } else {
    errorDisplay.style.display = "block";
  }
});
clearBtn.addEventListener("click", (e) => {
  console.log(`clear clicked`);
  counter = 0;
  counterSpan.innerHTML = counter;
  errorDisplay.style.display = "none";
});
