function reverseString(str) {
     return str.split('').reverse().join('');
}


const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Reversed string:", reversedString);
