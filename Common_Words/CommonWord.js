
var words = "Considering how common illness is, how tremendous the spiritual change that it brings, how astonishing, when the lights of health go down, the undiscovered countries that are then disclosed, what wastes and deserts of the soul a slight attack of influenza brings to view, what precipices and lawns sprinkled with bright flowers a little rise of temperature reveals, what ancient and obdurate oaks are uprooted in us by the act of sickness, how we go down into the pit of death and feel the water of annihilation close above our heads and wake thinking to find ourselves in the presence of the angels and harpers when we have a tooth out and come to the surface in the dentist’s arm-chair and confuse his “Rinse the Mouth —- rinse the mouth” with the greeting of the Deity stooping from the floor of Heaven to welcome us – when we think of this, as we are frequently forced to think of it, it becomes strange indeed that illness has not taken its place with love and battle and jealousy among the prime themes of literature.";
var punctuationless = words.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," ");
WordList = finalString.split(" ");

console.log(WordList);
var bestMode = 1;
var currentMode = 0;
var character;
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
