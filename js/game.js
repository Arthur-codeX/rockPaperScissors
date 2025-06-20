const countdown = document.getElementById("countdown");

const confuseThem = document.getElementById("confuse-them");
const PlayBtn = document.getElementById("play-btn");

let countDownValue = 15;

// console.log(countdown);
// console.log(confuseThem);
// console.log(PlayBtn);
PlayBtn.addEventListener("click", function () {});

function StartCountDown() {
  countDownValue = 15;
  let interval = null;
  interval = setInterval(function () {
    if (countDownValue <= 0) {
      clearInterval(interval); //Logic
      countdown.innerText = 15;
      return;
    }
    countdown.innerText = countDownValue - 1;
    countDownValue = countDownValue - 1;
  }, 1000);
}
