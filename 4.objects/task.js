function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Василиса", "Женский", 19);
let student2 = new Student("Артем", "Мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks !== undefined) {
    this.marks.push(...marksToAdd);
  }
};

Student.prototype.getAverage = function () {
  let sum = 0;
  if (Array.isArray(this.marks) && this.marks.length > 0) {
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    return sum / this.marks.length;
  }
  return 0;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  this.marks = undefined;
  this.excluded = reason;
};

