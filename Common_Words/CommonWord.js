var bestMode = 1;
var currentMode = 0;
var character;

var words = "hi life my hi this is code hi";
var punctuationless = words.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," ");
var WordList = finalString.split(" ");

for(var i=0; i<WordList.length; i++){
    for(var m=i; m<WordList.length; m++){
      if(WordList[i] == WordList[m]){
        currentMode += 1;
      }
      if(bestMode<currentMode){
        bestMode = currentMode;
        character = WordList[i];
      }
    }
    currentMode = 0;
}
console.log(character + " occured " + bestMode + " times.");
