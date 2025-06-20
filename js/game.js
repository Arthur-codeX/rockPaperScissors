const countdown = document.getElementById("countdown");

const confuseThem = document.getElementById("confuse-them");
const PlayBtn = document.getElementById("play-btn");

let consufusionInterVal = null;

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

function ConfusionStart() {
  let arr = [
    `<i class="fa-solid fa-hand-back-fist" style="font-size: 100px"></i>`,
    `<i class="fa-solid fa-hand" style="font-size: 100px"></i>`,
    `<i class="fa-solid fa-hand-scissors" style="font-size: 100px"></i>`,
  ];
  consufusionInterVal = setInterval(() => {
    // Math.random
    const randomNumber = Math.floor(Math.random() * 3); // 0,1,2
    //console.log(randomNumber);
    confuseThem.innerHTML = arr[randomNumber];
  }, 200);
}
