console.log("*****if and else statements!*****");

const isUserloggedIn = true
const temperature = 40

// if(temperature === 40) {
//     console.log("The temperature is 40 degrees");
// } else {
//     console.log("The temperature is not 40 degrees");
// }

const score = 95;

if (score >= 90) {
    let power = "A+";
    console.log(`User power: ${power}`);
}

// console.log("'User power: ${power}'"); // This will throw an error because 'power' is not defined outside the if block

// const balance = 1000;
// if (balance >500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) { 
//     console.log("less than 750");
// } else {
//     console.log("greater than 900");
// }

const UserloggedIn = true;
const debitCard = true;
const loogedInFromGoogle = false;
const loogedInFromEmail = true;

if (UserloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loogedInFromGoogle || loogedInFromEmail) {
    console.log("User looged in");
}