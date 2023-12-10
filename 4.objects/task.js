function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; 
}

let artem = new Student("Артем", "муж", 29);
let petya = new Student("Петя", "муж", 33);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  this.marks.push(mark);
};

Student.prototype.addMarks = function (...args) {
  args.map(el => this.marks.push(el));
};

Student.prototype.getAverage = function () {
  let sum = this.marks.reduce((sum, current) => sum + current);
  this.mediumAriphetic = sum / this.marks.length;
  return this.mediumAriphetic;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

artem.addMark(5);
artem.addMark(4);
artem.addMarks(4, 4, 3, 5, 4, 3, 4);
artem.getAverage();
artem.exclude("балбес");

petya.addMark(2);
petya.addMark(3);
petya.addMarks(2, 3, 2, 2, 2, 3, 2);
petya.getAverage();
petya.exclude("плохая успеваемость");

console.log(artem);
console.log(petya);
