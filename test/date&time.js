console.log("Understanding Date and Time in JavaScript!");
console.log();

let myDate = new Date();
console.log("Current Date and Time: " + myDate); // Current date and time
console.log(myDate.toString());        // String representation of the date and time
console.log(myDate.toDateString());     // Date in a human-readable format
console.log(myDate.toTimeString());      // Time in a human-readable format
console.log( myDate.toLocaleString());      // Localized string representation of the date and time
console.log();



let myCreatedDate = new Date("09-23-2000 16:20:00");
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleDateString()); // Localized date string
console.log(myCreatedDate.toLocaleTimeString()); // Localized time string   

console.log(myCreatedDate.toString()); // String representation of the created date
console.log(myCreatedDate.toDateString()); // Date in a human-readable format
console.log();

let myTimestamp = Date.now();
console.log("Current Timestamp: " + myTimestamp); // Current timestamp in milliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log();

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})