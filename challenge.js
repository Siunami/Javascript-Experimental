
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
/*The FizzBuzz Challenge
For an interval 1-100,
If the number is divisible by 3, print Fizz
If the number is divisible by 5, print Buzz,
If the number is divisible by both, print FizzBuzz
*/

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
      for(var x = "#"; (x.length) <= size; x += "#"){
        console.log(x);
    }
  }
}
size(4);
/*For any size, create right triangles of that size and for each size less than that
Ex: Size(3)

Output:
#
##
### (End of size three right triangle.)
#
## (End of size two right triangle.)
# (End of size one right triangle.)
*/
