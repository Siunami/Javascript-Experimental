var numOne = document.getElementById('num1');
var numTwo = document.getElementById('num2');
var addSum = document.getElementById('addsum');
var numThree = document.getElementById('num3');
var numFour = document.getElementById('num4');
var Multiply = document.getElementById('multiply');

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
numThree.addEventListener("input", multiply);
numFour.addEventListener("input", multiply);

function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  addsum.innerHTML =  "Your number is " + (one + two);
}

function multiply() {
    if (isNaN(numThree)) {   //Figure out how to check for a number
        console.log("not a number");
    } else {
        console.log("A number!");
        var three = parseFloat(numThree.value);
        var four = parseFloat(numFour.value);
    }
    Multiply.innerHTML = "Your number is " + (three * four);
}

