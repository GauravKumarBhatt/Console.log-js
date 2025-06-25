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