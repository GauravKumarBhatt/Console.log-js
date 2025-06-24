let score = "hitesh"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggendIn = "Bhatt"
let booleanIsLoogedIn = Boolean(isLoggendIn)
// console.log(booleanIsLoogedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

// *****************************operations****************************

let value = 3
let negValue = -value

// console.log(negValue)
// console.log(value)

// console.log(value + 2) // addition
// console.log(value - 2) // subtraction
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Gaurav"
let str2 = "Bhatt"
let str3 = str1 + str2
// let str4 = str1 + " " + str2
// console.log(str3)
// console.log(str4)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+false);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 10
// console.log(num1, num2, num3);

let gameScore = 100
++gameScore;
// console.log(gameScore);

// console.log("confusion with + operator");
// console.log("1" + 2 + 2 + "2");
// console.log(1 + 2 + 2 + "2");
// console.log(1 + 2 + "2" + 2 * 2);
// console.log(1 + "2" + 2 + 2);
// console.log("1" + "2" + 2 + 2);

// console.log( (3 + 4) * 5 % 3);



// **************************COMPARISON OPERATORS*****************************

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log();

console.log(null > 0);  // false
console.log(null < 0);  // false   
console.log(null == 0); // false
console.log(null >= 0); // true

console.log();

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false

console.log();

console.log("2" === 2); //false
console.log("2" == 2); //true