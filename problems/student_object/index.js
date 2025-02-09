/*
// Create an Object:
// Write a JavaScript object that represents a student with properties name, age, and marks. Add a method to calculate the student's grade based on marks.
*/

// function student() {
let obj = {
  name: "john",
  age: 30,
  marks: 53,
  studentGrade: function () {
    let grade = "";
    if (this.marks >= 90) {
      grade = "A+";
    } else if (this.marks >= 80) {
      grade = "A";
    } else if (this.marks >= 70) {
      grade = "B";
    } else if (this.marks >= 60) {
      grade = "C";
    } else if (this.marks >= 50) {
      grade = "D";
    } else if (this.marks >= 40) {
      grade = "E";
    } else {
      grade = "F";
    }
    return grade;
  },
};
// }
console.log(obj.studentGrade());
