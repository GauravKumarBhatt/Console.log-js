console.log("*****switch statements!*****");

console.log();
// switch statements are used to execute one block of 
// code among many options based on the value of a variable 
// or expression.

// switch (key) {
//     case value:
//         // code block
//         break;

//     default:
//         // code block
//         break;
// }

const week = "friday"

switch (week) {
    case "monday":
        console.log("Today is Monday!");
        break;
    case "tuesday":
        console.log("Today is tuesday!");
        break;
    case "Wednesday":
        console.log("Today is Wednesday!");
        break;
    case "thursday":
        console.log("Today is Thursday!");
        break;
    case "friday":
        console.log("Today is Friday!");
        break;
    case "Saturday":
        console.log("Today is Saturday!");
        break;
    
    default:
        console.log("Today is Sunday!");
        break;
}