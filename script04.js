function hasProperty(obj, propertyName) {

    return obj.hasOwnProperty(propertyName);
}


const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};

console.log(hasProperty(student, "age")); 
console.log(hasProperty(student, "address"));
