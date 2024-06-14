  
const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};


student.updateGrade = function(newGrade) {
    this.grade = newGrade;
};


console.log("Before update:");
console.log(student);


student.updateGrade("B");

console.log("\nAfter update:");
console.log(student);

