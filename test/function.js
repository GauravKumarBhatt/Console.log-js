console.log("*****Function******");

function sayMyName(){
  console.log("G");
  console.log("A");
  console.log("U");
  console.log("R");
  console.log("A");
  console.log("V");
}

// sayMyName();

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log('Result is:', addTwoNumbers(5, 10));

const Result = addTwoNumbers(5, 10);
// console.log('Result is:', Result);

function loginUserMessage(username = JavaScript) {
  if (!username) {
    console.log("Please enter a valid username");
    return
  }
  return `Welcome ${username}, you have successfully logged in!`;
}

// loginUserMessage("Gaurav");
// console.log(loginUserMessage("Gaurav"));
// console.log(loginUserMessage("JavaScript"));

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// const Price = calculateCartPrice(200, 400, 500, 2000);
// console.log(Price);

const user = {
  username: "Gaurav",
  prices: 199
}

function handleObject(anyObject) {
  // console.log(anyObject.username);
  // console.log(anyObject.prices);
  console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// console.log(handleObject(user));

handleObject({
    username: "sam",
    prices: 399
})

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// Function Constructor
// This is a way to create a function using the Function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new Person("Gaurav", 25);
// console.log(user1);

//anonymous function
// setTimeout(function () {
//   console.log("This runs after 2 seconds");
// }, 2000);

// callback function
function processUserInput(callback) {
  let name = "Gaurav";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hello " + name);
});


// Recursive function to calculate factorial
// A recursive function is a function that calls itself to solve a problem.
// function factorial(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // Output: 120


// function sum(a, b) {
//   return a + b; 
// } 
// console.log(sum(5, 10)); // Output: 15



// example of a recursive function to calculate factorial, input from user
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

rl.question("Enter a number: ", function(num) {
  const result = factorial(parseInt(num));
  console.log(`Factorial of ${num} is: ${result}`);
  rl.close();
});
