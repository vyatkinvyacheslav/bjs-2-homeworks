function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    
    this.setSubject = function(subjectName) {
      this.subject = subjectName;
    };
    
    this.addMarks = function(...marksToAdd) {
      if (!this.marks) {
        console.log("Ошибка! Оценок нет.");
        return;
      }
      this.marks.push(...marksToAdd);
    };
  
    this.getAverage = function() {
      if (!this.marks || !this.marks.length) {
        return 0;
      }
      const sum = this.marks.reduce((acc, curr) => acc + curr);
      return sum / this.marks.length;
    };
    this.exclude = function(reason) {
      delete this.subject;
      delete this.marks;
      this.excluded = reason;
    };
  }
  
  let student1 = new Student("Василиса", "женский", 19);
  student1.setSubject("Algebra");
  console.log(student1.getAverage()); // 0
  student1.addMarks(4, 5, 4, 5);
  console.log(student1.getAverage()); // 4.5
  console.log(student1);
  // {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
  let student2 = new Student("Артём", "мужской", 25);
  student2.setSubject("Geometry");
  student2.exclude('плохая учёба')
  console.log(student2)
  // {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}