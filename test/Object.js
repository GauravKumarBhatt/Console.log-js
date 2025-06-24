console.log("*****Object******");

const Gaurav = {
    name: "Gaurav",
    age: 25,
    city: "Noida",
    hobbies: ["reading", "coding", "gaming"],
    email: "Gauravbhatt@google.com",
    isStudent: false,
    phoneNo: 1234567890,
    address: {
        street: "123 Main St",
        city: "Noida",
        state: "UP",
        country: "India"
    },
    isloogedIn: false,
    lastLogin: ['moday', 'tuesday', 'wednesday']
};

console.log(Gaurav.name);
console.log(Gaurav.age);
console.log(Gaurav.city);
console.log(Gaurav.hobbies);

// Gaurav.email = "gaurav@netlify.com"
// Object.freeze(Gaurav);
Gaurav.email = "gaurav@microsoft.nic.in"
// Object.freeze(Gaurav);
// console.log(Gaurav);
console.log();

Gaurav.greating = function() {
    console.log("Hello, my name is " + this.name);
    console.log("I am " + this.age + " years old.");
    console.log("I live in " + this.city + ".");
    console.log("My hobbies include " + this.hobbies.join(", ") + ".");
    console.log("You can contact me at " + this.email + ".");
    console.log("Is student: " + this.isStudent);
    console.log("Phone number: " + this.phoneNo);
}
Gaurav.greating();