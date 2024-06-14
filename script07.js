
const userMap = new Map();


function addUser(name, age, email) {
    userMap.set(email, { name, age, email });
    console.log(`User ${name} added successfully.`);
}


function updateUser(email, newName, newAge, newEmail) {
    if (userMap.has(email)) {
        
        userMap.delete(email);
      
        addUser(newName, newAge, newEmail);
        console.log(`User ${newName} updated successfully.`);
    } else {
        console.log(`User with email ${email} does not exist.`);
    }
}


function deleteUser(email) {
    if (userMap.has(email)) {
        userMap.delete(email);
        console.log(`User with email ${email} deleted successfully.`);
    } else {
        console.log(`User with email ${email} does not exist.`);
    }
}


addUser("John", 30, "john@example.com");
addUser("Alice", 25, "alice@example.com");

console.log("\nBefore update:");
console.log(userMap);

updateUser("john@example.com", "John Doe", 35, "johndoe@example.com");

console.log("\nAfter update:");
console.log(userMap);

deleteUser("alice@example.com");

console.log("\nAfter deletion:");
console.log(userMap);
