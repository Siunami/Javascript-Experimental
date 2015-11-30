/*var words = "He had one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life. It faced, or seemed to face, the whole external world for an instant and then concentrated on you with an irresistible prejudice in your favor. It understood you just as far as you wanted to be understood, believed in you as you would like to believe in yourself.";
var punctuationless = words.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," ");
WordList = finalString.split(" ");*/
var words = "hi hi hi hi jk";
var bestMode = 1;
var currentMode = 0;
var character;
var WordList;

function Find_Word(){
  var punctuationless = words.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
  var finalString = punctuationless.replace(/\s{2,}/g," ");
  WordList = finalString.split(" ");
  function FindMode(Wordlist){}
}

function FindMode(){
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
}
console.log(character);
/*while(character == undefined){
  if(character == undefined){
    console.log("hi");
  }else{
    console.log(character + " occured " + bestMode + " times.");
    break;
  }
}*/
