let i = 0
// while (i<=10){
//     console.log(`value of i is ${i}`);
//     i = i + 1.5
// }

let myArray = ['Lan', 'Man', 'Wan']

let arr = 0
while(arr < myArray.length) {
    // console.log(`value of ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11
do {
    // console.log(`Score is ${score}`);
    score++
} while(score <= 10);


// for of
// ["","",""]
// [{},{},{}]

const array = [1, 2, 3, 4, 5]
for (const num of array) {
    // console.log(num);
}

const greetings = "JavaScript!"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// Maps - creates a new array

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map){
    // console.log(key, ';-',value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

const myobject ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobject) {
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    // console.log(programming[key]);
}