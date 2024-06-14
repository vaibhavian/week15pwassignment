function countProperties(obj) {
    
    const keys = Object.keys(obj);
   
    return keys.length;
}


const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};

console.log(countProperties(student)); 
