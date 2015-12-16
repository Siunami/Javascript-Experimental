function Student(GPA, Faculty, Major) {
  this.GPA = GPA;
  this.Faculty = Faculty;
  this.Major = Major;
}

var Matthew = new Student(5.0, "Science", "Cognitive Systems");
var Rohit = new Student(5.0, "Science", "Micro Biology");
var Marcel = new Student(5.0, "Engineering", "Undeclared");
var Louis = new Student(5.0, "Engineering", "Mechanical");
var Matt = new Student(5.0, "Engineering", "Mechanical");
var Petra = new Student(5.0, "Science", "Biology");
var Senara = Senny = new Student(5.0, "Science", "Biology");
var Jen = Jennifer = new Student(5.0, "Science", "BioChemistry");
var Julia = Jules = new Student(5.0, "???", "Life");

var registeredStudents = [Matthew, Rohit, Marcel, Louis, Matt, Petra, Senara, Jen, Julia];

function findStudent(){
  var submit = document.getElementById('name');
  console.log(submit.value);
    for (var i = 0; i < registeredStudents.length; i++){
      if (submit.value == registeredStudents[i]){
        var student = registeredStudents[i];
        console.log(student);
        break;
      }else{
        console.log("Not a registered student");
      }
    }
}

//Trying to take a user input of one of the object names and return the properties.
