
for (var line = "#"; line.length<8; line += "#")
  console.log(line);
/*
#
##
###
####
#####
######
#######
*/
for (number=1; number<101; number++){
  if(number % 3 == 0 && number % 5 != 0){
    console.log(number + "Fizz");
  }else if (number % 5 == 0 && number % 3 != 0){
    console.log(number + "Buzz");
  }else if (number % 3 == 0 && number % 5 == 0){
    console.log(number + "FizzBuzz");
  }else{
    console.log(number);
  }
}
/*The FizzBuzz Challenge*/

size = 8;
board = "";
for(var y = 0; y<size; y++){
  for(var x = 0; x<size; x++){
    if((x+y) % 2 == 0)
      board += " ";
    else if ((x+y) % 2 != 0)
      board += "#";
  }
  board += "\n";
}
console.log(board);

/*Chessboard pattern*/


function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

/*Need to fix this
  Prints one less time than needed.
  Problem likely in the 2nd for loop
*/
var size = function(size){
  for(size; size>0; size--){
      for(var x = "#"; (x.length) ; x += "#"){
        console.log(x);
    }
  }
}
size(3);
