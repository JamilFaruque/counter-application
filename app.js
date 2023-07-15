const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
const autoUp = document.querySelector('.auto-count-up')
const autoDown = document.querySelector('.auto-count-down')
const counter = document.querySelector('.counter-digit')

function reset() {
  counter.textContent = 0;
  counter.style.color = '#000';
  isUpClicked = false;
  isDownClicked = false;
  clearInterval(upInterval);
  clearInterval(downInterval);
}

function increase() {
  let count = Number(counter.textContent);
  count++
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = 'green'
  } else if (count == 0) {
    counter.style.color = '#000'
  }
}
function decrease() {
  let count = Number(counter.textContent);
  count--
  counter.textContent = count;
  if (count < 0) {
    counter.style.color = 'red'
  } else if (count == 0) {
    counter.style.color = '#000'
  }
}
// Here's a lesson : We can disabled any button by buttonVarName.disabled = true;
// lets do the same thing otherwise :: by declaring isClicked=false; var.
let isUpClicked = false;
let isDownClicked = false;

let upInterval;
let downInterval;
function autoCountUp() {
  if (!isUpClicked) {
    isUpClicked = true;
    isDownClicked = false;
    upInterval = setInterval(increase, 1000)
    clearInterval(downInterval);
  }
}
function autoCountDown() {
  if (!isDownClicked) {
    isDownClicked = true;
    isUpClicked = false;
    downInterval = setInterval(decrease, 1000)
    clearInterval(upInterval);
  }
}


increaseBtn.addEventListener('click', increase)
decreaseBtn.addEventListener('click', decrease)
autoUp.addEventListener('click', autoCountUp)
autoDown.addEventListener('click', autoCountDown)
resetBtn.addEventListener('click', reset)


