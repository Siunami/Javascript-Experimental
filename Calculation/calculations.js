var numOne = document.getElementById('num1');
var numTwo = document.getElementById('num2');
var addSum = document.getElementById('addsum');
var numThree = document.getElementById('num3');
var numFour = document.getElementById('num4');
var Subtract = document.getElementById('subtract');
var numFive = document.getElementById('num5');
var numSix = document.getElementById('num6');
var Multiply = document.getElementById('multiply');
var numSeven = document.getElementById('num7');
var numEight = document.getElementById('num8');
var Divide = document.getElementById('divide');

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
numThree.addEventListener("input", subtract);
numFour.addEventListener("input", subtract);
numFive.addEventListener("input", multiply);
numSix.addEventListener("input", multiply);
numSeven.addEventListener("input", divide);
numEight.addEventListener("input", divide);

function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  addsum.innerHTML = "Your number is " + (one + two);
}

function subtract() {
  var three = parseFloat(numThree.value) || 0;
  var four = parseFloat(numFour.value) || 0;
  Subtract.innerHTML = "Your number is " + (three - four);
}

function multiply() {
  var five = parseFloat(numFive.value) || 1;
  var six = parseFloat(numSix.value) || 1;
  Multiply.innerHTML = "Your number is " + (five * six);
}

function divide() {
  var seven = parseFloat(numSeven.value) || 1;
  var eight = parseFloat(numEight.value) || 1;
  Divide.innerHTML = "Your number is " + (seven / eight);
}
