class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        console.log("Оценка должна быть не меньше 2 и не больше 5.");
        return;
      }
  
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
  
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      const subjectMarks = this.marks[subject];
      if (!subjectMarks || subjectMarks.length === 0) {
        console.log(`По предмету ${subject} нет оценок.`);
        return 0;
      }
  
      const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
      return sum / subjectMarks.length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
  
      if (subjects.length === 0) {
        console.log("Нет предметов с оценками.");
        return 0;
      }
  
      const sum = subjects.reduce((acc, subject) => {
        return acc + this.getAverageBySubject(subject);
      }, 0);
  
      return sum / subjects.length;
    }
  }

  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); 
  
  console.log("Средний балл по предмету физика:", student.getAverageBySubject("физика")); 
  console.log("Средний балл по предмету биология:", student.getAverageBySubject("биология")); 
  console.log("Средний балл по всем предметам:", student.getAverage()); 
  