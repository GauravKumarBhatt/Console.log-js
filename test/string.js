console.log("Let's start string operations!");
console.log();

const name = "JavaScript";
const repoCount = 50

// console.log(name + repoCount + " Value");
console.log("Hello, " + name + "! You have " + repoCount + " repositories.");

const gameName = new String("The Song of Ice and Fire");
console.log(gameName);
console.log("Output 1 -" ,gameName.length);
console.log("Output 2 -" ,gameName.toUpperCase());    // Convert to uppercase
console.log("Output 3 -" ,gameName.toLowerCase()); // Convert to uppercase and lowercase
console.log("Output 4 -" ,gameName.includes("Ice")); // Check if the string contains "Ice"
console.log("Output 5 -" ,gameName.charAt(0));    // Get the character at index 0
console.log("Output 6 -" ,gameName[0]);   // Get the character at index 0 using bracket notation
console.log("Output 7 -" ,gameName.indexOf("Ice")); // Find the index of "Ice"

console.log();
console.log(gameName.__proto__); // Access the prototype of the string object


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, -1); // Extracts characters from index -8 to -1
console.log(anotherString);
console.log();

const newStringOne = "   JavaScript   "
console.log(newStringOne);
console.log("Output 8 -" ,newStringOne.trim()); // Remove whitespace from both ends
console.log("Output 9 -" ,newStringOne.trimStart()); // Remove whitespace from the start
console.log("Output 10 -" ,newStringOne.trimEnd()); // Remove whitespace from the end
console.log();

const url = "https://www.linkedin.com/in/gaurav-bhatt-4186441b8/"
console.log(url.startsWith("https://"));    // Check if the string starts with "https://"

console.log(url.replace('bhatt', '-'))  // Replace 'bhatt' with '-'

console.log(url.includes('bhatt')) // Check if the string contains 'bhatt'

console.log(gameName.split('-')); // Split the string into an array using '-' as the delimiter
console.log(gameName.split(' ')); // Split the string into an array using space as the