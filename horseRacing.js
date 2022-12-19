var position1 = 20;
var horse1 = document.getElementById('horse1');
var position2 = 20;
var horse2 = document.getElementById('horse2');
var position3 = 20;
var horse3 = document.getElementById('horse3');
var position4 = 20;
var horse4 = document.getElementById('horse4');
var position5 = 20;
var horse5 = document.getElementById('horse5');
var position6 = 20;
var horse6 = document.getElementById('horse6');

var min = 0;
var max = 1800;
var maxInt = 7;
var finishTime = [0, 0, 0, 0, 0, 0];
// YOUR CODE 
// ----------------

function startTimer(duration, display) {
    var timer = duration, seconds;
    timerInterval = setInterval(function () {
      
        seconds = parseInt(timer % 60, 10);
        display.textContent = seconds;

        if (--timer < 0) {
          document.getElementById("countdown").innerHTML = "START!";
          clearInterval(timerInterval);
        }
    }, 1000);
}

window.onload = function () {
    var fiveSeconds = 5,
        display = document.querySelector("#countdown");
    startTimer(fiveSeconds, display);
};

setTimeout(() => {
  horse1.classList.add("fa-beat-fade");
  horse2.classList.add("fa-beat-fade");
  horse3.classList.add("fa-beat-fade");
  horse4.classList.add("fa-beat-fade");
  horse5.classList.add("fa-beat-fade");
  horse6.classList.add("fa-beat-fade");
}, 6500);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function move1(){
  var velocity1 = getRandomInt(maxInt);
  horse1.style.left = position1 + "px";
  if (position1 >= max) {
    position1 = position1;
    finishTime[0] = Date.now()
    horse1.classList.remove("fa-beat-fade");
    clearInterval(interval1);
  } else {
    position1 = position1 + velocity1;

  }
}
function move2(){
  var velocity2 = getRandomInt(maxInt);
  horse2.style.left = position2 + "px";
  if (position2 >= max) {
    position2 = position2;
    finishTime[1] = Date.now()
    horse2.classList.remove("fa-beat-fade");
    clearInterval(interval2);
  } else {
    position2 = position2 + velocity2;

  }
}
function move3(){
  var velocity3 = getRandomInt(maxInt);
  horse3.style.left = position3 + "px";
  if (position3 >= max) {
    position3 = position3;
    finishTime[2] = Date.now()
    horse3.classList.remove("fa-beat-fade");
    clearInterval(interval3);
  } else {
    position3 = position3 + velocity3;
  }
}
function move4(){
  var velocity4 = getRandomInt(maxInt);
  horse4.style.left = position4 + "px";
  if (position4 >= max) {
    position4 = position4;
    finishTime[3] = Date.now()
    horse4.classList.remove("fa-beat-fade");
    clearInterval(interval4);
  } else {
    position4 = position4 + velocity4;
  }
}
function move5(){
  var velocity5 = getRandomInt(maxInt);
  horse5.style.left = position5 + "px";
  if (position5 >= max) {
    position5 = position5;
    finishTime[4] = Date.now()
    horse5.classList.remove("fa-beat-fade");
    clearInterval(interval5);
  } else {
    position5 = position5 + velocity5;
  }
}
function move6(){
  var velocity6 = getRandomInt(maxInt);
  horse6.style.left = position6 + "px";
  if (position6 >= max) {
    position6 = position6;
    finishTime[5] = Date.now()
    horse6.classList.remove("fa-beat-fade");
    clearInterval(interval6);
  } else {
    position6 = position6 + velocity6;
  }
}
setTimeout(() => {
  interval1 = setInterval(move1, 20);
  interval2 = setInterval(move2, 20);
  interval3 = setInterval(move3, 20);
  interval4 = setInterval(move4, 20);
  interval5 = setInterval(move5, 20);
  interval6 = setInterval(move6, 20);
}, 6500);

setTimeout(() => {
  const min = Math.min(...finishTime)
  const index = finishTime.indexOf(min);
  const result = index + 1; 
  document.getElementById("countdown").innerHTML = "The horse #"+result+" won!";
},20000);
