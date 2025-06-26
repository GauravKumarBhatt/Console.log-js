console.log("*****Scopes******");

// let a = 1; // Global scope
// const b = 2; // Global scope
// var c = 3; // Global scope

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log("OUTER: ", a);


function one() {
    const username = "Gaurav";

    function two() {
        const website = "gauravjs.com";
        console.log(username);
    }
    // console.log(website); // This will throw an error because 'website' is not defined in this scope
    // console.log(username);
    
    two();
}

// one();

if (true) {
    const username = "Gaurav";
    if (username === "Gaurav") {
        const website = "gauravjs.com";
        console.log(username + " " + website);
    }
    // console.log(website); // This will throw an error because 'website' is not defined in this scope
}

// ******************** interesting example ********************



function addone(num) {
    return num + 1;
}

console.log(addone(5))

addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(5))