function Student(name, gender, age) {
this.name = name;
this.gender = gender;
this.age = age;
}
let student1 = new Student("Makhmud", "male", "25");
let student2 = new Student("Ahmed", "male", "23");
let student3 = new Student("Ramzan", "male", "17");
let student4 = new Student("Fatima", "female", "22");


Student.prototype.setSubject = function(subjectName) {
this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
if(this.marks === undefined){
this.marks = [mark];
} else {
  this.marks.push(mark);
}
}
Student.prototype.addMarks = function(...marks) {
if (this.marks === undefined) {
  this.marks = [...marks];
} else {
  this.marks.push(...marks);
}
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
delete this.subject;
delete this.marks;
this.excluded = reason;
}

Student.prototype.getAverage = function (){
  if (this.marks === undefined) {
    return null}
    else { 
      return (this.marks.reduce ((previous, next) => previous + next))/this.marks.length
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject
  this.excluded = reason;
}