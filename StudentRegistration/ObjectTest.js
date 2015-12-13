function Student(GPA, Faculty, Major) {
  this.GPA = GPA;
  this.Faculty = Faculty;
  this.Major = Major;
}

var Matthew = new Student(5.0, "Science", "Cognitive Systems");
var Rohit = new Student(5.0, "Science", "Micro Biology");
var Marcel = new Student(5.0, "Engineering", "Undeclared");
var Louie = new Student(5.0, "Engineering", "Mechanical");
var Matt = new Student(5.0, "Engineering", "Mechanical");
var Petra = new Student(5.0, "Science", "Biology");
var Senara = Senny = new Student(5.0, "Science", "Biology");
var Jen = Jennifer = new Student(5.0, "Science", "BioChemistry");
var Julia = Jules = new Student(5.0, "???", "Life");

/*function findStudent(){
  var student = document.getElementById('name').innerHTML;
  return student;
}*/
//Trying to take a user input of one of the object names and return the properties
 console.log(Matthew);
