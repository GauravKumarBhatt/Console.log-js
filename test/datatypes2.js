/* There are two types of data in JavaScript: primitive and reference.
   - Primitive data types are immutable and represent single values, while reference 
   data types are mutable and can hold collections of values or more complex entities.
   - Primitive data types are stored directly in the variable, while reference data types
   store a reference to.

Primitive data types include:
- Number: Represents numeric values, both integers and floating-point numbers.
- String: Represents sequences of characters, enclosed in single or double quotes.
- Boolean: Represents a logical entity and can have two values: true or false.
- Undefined: Represents a variable that has been declared but not assigned a value.
- Null: Represents the intentional absence of any object value.
- Symbol: Represents a unique and immutable value, often used as object property keys.
- BigInt: Represents integers with arbitrary precision, useful for very large numbers.

Reference data types include:
- Object: A collection of key-value pairs, where keys are strings (or Symbols) and  
        values can be of any type, including other objects.
- Array: A special type of object used to store ordered collections of values, 
        which can be of any type, including other arrays or objects.
- Function: A callable object that can be invoked to perform a specific task.
*/


console.log("*****Understanding Data Types in JavaScript!*****");
console.log();

console.log("Primitive Data Types:");
console.log("1. Number: " + (42)); // Example of a number
console.log("2. String: " + ("Hello, World!")); // Example of a string
console.log("3. Boolean: " + (true)); // Example of a boolean
console.log("4. Undefined: " + (undefined)); // Example of undefined
console.log("5. Null: " + (null)); // Example of null
// console.log("6. Symbol: " + (Symbol("unique"))); // Example of a symbol
console.log("7. BigInt: " + (1234567890123456789012342345678901234567890n)); // Example of a BigInt
console.log();

console.log("Reference Data Types:");
console.log("1. Object: " + ({"name": "Alice", "age": 30})); // Example of an object
console.log("2. Array: " + ([1, 2, 3, 4, 5])); // Example of an array
console.log("3. Function: " + (function() { return "Hello from a function!"; })); // Example of a function
console.log();



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log("Array: " + heros);
console.log("Object: " + myObj);
console.log("Function: " + myFunction);
console.log("Function Call: " + myFunction()); // Calling the function to see its output

console.log(myObj); // String representation of the object