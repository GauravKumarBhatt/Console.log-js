console.log("*****Understanding Math and NUM Operations in JavaScript!*****");
console.log();

const score = 100;
console.log(score);
console.log("Output 1 -", score.toString()); // Convert number to string
console.log("Output 2 -", score.toFixed(3)); // Format number to two decimal places
console.log("Output 3 -", score.toExponential(2)); // Convert number to exponential notation with 2 decimal places
console.log("Output 4 -", score.toPrecision(3)); // Format number to three significant digits
console.log("Output 5 -", Number.parseInt("100px")); // Parse string to integer
console.log("Output 6 -", Number.parseFloat("100.50px")); // Parse string to float
console.log("Output 7 -", Number.isNaN(NaN)); // Check if value is NaN
console.log("Output 8 -", Number.isInteger(100)); // Check if value is an integer
console.log("Output 9 -", Number.isInteger(100.50)); // Check if value is an integer
console.log("Output 10 -", Number.isInteger(100.00)); // Check if   value is an integer

const otherNumber = 156.5966;
console.log("Output 11 -", otherNumber.toPrecision(4)); // Format number to four significant digits
console.log("Output 12 -", otherNumber.toPrecision(3));
console.log("Output 12 -", otherNumber.toPrecision(5));
console.log("Output 13 -", otherNumber.toFixed(4));
console.log("Output 14 -", otherNumber.toFixed(3));
console.log("Output 15 -", otherNumber.toFixed(2));
console.log("Output 16 -", otherNumber.toFixed(1));
console.log("Output 17 -", otherNumber.toFixed(0)); // Format number to zero decimal places 
console.log();

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Convert number to localized string format
console.log();

// *****************Math operations*****************
console.log("*****Understanding Math Operations in JavaScript!*****");
console.log(Math);
console.log("Output 1 -", Math.PI); // Get the value of PI
console.log(Math.PI.toFixed(3)); // Format PI to two decimal places
console.log("Output 2 -", Math.E); // Get the value of Euler's number

console.log("Output 3 -", Math.abs(-100)); // Get the absolute value
console.log("Output 4 -", Math.ceil(100.50)); // Round up to the nearest integer

console.log("Output 5 -", Math.floor(190.5990)); // Round down to the nearest integer

console.log("Output 6 -", Math.round(190.5990)); // Round to the nearest integer
console.log("Output 7 -", Math.round(190.4000)); // Round to the nearest integer

console.log("Output 8 -", "MAX value is", Math.max(10, 25, 35, 30, 15)); // Get the maximum value
console.log("Output 9 -", "MIN value is", Math.min(10, 25, 35, 30, 15)); // Get the minimum value
console.log();

console.log("random number", Math.random()); // Generate a random number between 0 and 1
console.log( Math.random() * 100); // Generate a random number between 0 and 100
console.log( Math.floor(Math.random() * 100)); // Generate a random integer between 0 and 99
console.log( Math.floor(Math.random() * 100) + 1); 
console.log( Math.floor(Math.random() * 100) +    1);

const min = 10;
const max = 100;

console.log("Generate a random number beetween Max and Min!", Math.floor((Math.random() * (max - min + 1)) + min)); // Generate a random integer between min and max