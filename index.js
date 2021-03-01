import "./styles.css";

//exercise 2
function calcLength(n) {
  console.log(`OMG! my name is ${n} char long!`);
}

function strLength(name, calcLength) {
  var length = name.length;
  calcLength(length);
}

//console.log(strLength("Radhika", calcLength));

//exercise 3

function successCB() {
  console.log("Yay! I am Alive");
}

function failCB() {
  console.log("Give my bose speakers and headphones to my sister");
}

function willThanosKillMe(name, successCB, failCB) {
  var l = name.length;
  if (l % 2 === 0) {
    successCB();
  } else failCB();
}

//console.log(willThanosKillMe("Radhika", successCB, failCB));

//exercise 4
function printMsg(msg) {
  console.log(msg);
}
function printAfterDelay(msg, delay) {
  setTimeout(() => printMsg(msg), delay);
  console.log("print something");
  console.log("print something more........");
  console.log("print a little something more....");
}
//printAfterDelay("Radhika is my name", 5000);

//exercise6

function printAfterInterval(msg, interval) {
  setInterval(() => printMsg(msg), interval);
  console.log("In the interval do print something");
  console.log("In the interval do print something more........");
  console.log("In the interval do print a little something more....");
}

//printAfterInterval("Hello World!", 6000);

function Countdown(n) {
  for (var i = n; i > 0; i--) {
    console.log();
  }
}

function printBangBang() {
  console.log("Bang Bang!");
}

function printCountDown(n) {
  setInterval(() => {
    Countdown(n);
    printBangBang();
  }, n);
}

//printCountDown(5);
