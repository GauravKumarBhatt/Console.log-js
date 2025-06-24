// console.log("*****Understanding arrays in JavaScript******");

// /* 
//     1- Arrays are a special type of object in JavaScript used to store ordered collections of values.
//        They can hold elements of any type, including other arrays or objects.
//     2- Arrays are zero-indexed, meaning the first element is at index 0.
//     3- You can create an array using square brackets [] and separate elements with commas.
//     4- Arrays have a length property that indicates the number of elements in the array.    
//     5- You can access elements using their index, e.g., arr[0] for the first element.   
//     6- Arrays are mutable, meaning you can change their elements after creation.
//     7- Common methods include push() to add elements, pop() to remove the last element,
//         shift() to remove the first element, unshift() to add elements to the beginning,
//         and splice() to add or remove elements at specific positions.
// */ 
// const arr = [1, 2, 3, 4, 5];
// const arr2 = ["apple", "carrot", "diamond", "elephant"];
// console.log("Array 1: " + arr);
// console.log("Array 2: " + arr2);

// console.log("Length of Array 1: " + arr.length);
// console.log("Length of Array 2: " + arr2.length);

// const myarr = new Array(5, 4); // Creates an array with 5 empty slots
// console.log("New Array with 5 empty slots: " + myarr);
// console.log();

// console.log(myarr[0]);
// console.log(myarr[1]);
// console.log(myarr[2]); // Undefined since the third element is not set

// console.log(myarr.push(3)); // Adds 3 to the end of the array
// console.log(myarr.push(4)); // Adds 4 to the end of the array
// console.log(myarr.push(5)); // Adds 5 to the end of the array
// console.log(myarr.push(6)); // Adds 6 to the end of the array   
// console.log(myarr.push(7)); // Adds 7 to the end of the array
// console.log(myarr.push(8)); // Adds 8 to the end of the array
// console.log(myarr.push(9)); // Adds 9 to the end of the array
// console.log(myarr.push(10)); // Adds 10 to the end of the array
// console.log(myarr);

// console.log(myarr.pop(5)); // Removes the last element (5)
// console.log(myarr);

// console.log(myarr.shift()); // Removes the first element (3)
// console.log(myarr);

// console.log(myarr.unshift(1)); // Adds 1 to the beginning of the array
// console.log(myarr);

/* difference between splice and slice
    - splice() modifies the original array by adding or removing elements at a specific index.
    - slice() creates a new array containing a portion of the original array without modifying it.
    syntax:
    - splice(start, deleteCount, item1, item2, ...) 
    - slice(start, end) 
    where start is the index to start slicing, end is the index to stop slicing (not included).
*/

// console.log(myarr.splice(2, 1, 99)); // Removes one element at index 2 and adds 99
// console.log(myarr); // Displays the modified array

// console.log(myarr.splice(2, 0, 88)); // Adds 88 at index 2 without removing any elements
// console.log(myarr); // Displays the modified array

// console.log(myarr.slice(2, 5)); // Creates a new array with elements from index 2 to 4
// console.log(myarr); // Displays the original array (unchanged)
// console.log(myarr.slice(2)); // Creates a new array with elements from index 2 to the end
// console.log(myarr); // Displays the original array (unchanged)




const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// slice, splice

console.log("A ", myArr);
console.log();

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log();

console.log("B ", myArr);
console.log();

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);