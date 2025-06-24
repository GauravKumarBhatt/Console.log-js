const countryHeroes = ['Netaji Subhas Chandra Bose', 'Bhagat Singh', 'Rani Lakshmibai', 'Dr. B.R. Ambedkar'];
const myHeroes = ['maharana pratap', 'chhatrapati shivaji maharaj', 'sardar vallabhbhai patel', 'vikramaditya Parmar', 'chandragupta maurya'];

countryHeroes.push(...myHeroes); // Merging myHeroes into countryHeroes
console.log(countryHeroes); // Displays the merged array
// console.log('length of the array', countryHeroes.length); // Displays the length of the merged array

// console.log(countryHeroes[3][1]); // Displays the second character of the fourth hero's name
// console.log(countryHeroes[3].charAt(1)); // Another way to access the second character of the fourth hero's name
// console.log(countryHeroes[3].slice(1, 3)); // Displays a substring of the fourth hero's name from index 1 to 2 
// console.log(countryHeroes[3].substring(1, 3)); // Another way to get a substring of the fourth hero's name

// console.log(countryHeroes[3].indexOf('B')); // Finds the index of the first occurrence of 'B' in the fourth hero's name
// console.log(countryHeroes[3].lastIndexOf('B')); // Finds the index of the last occurrence of 'B' in the fourth hero's name
// console.log(countryHeroes[3].includes('B')); // Checks if 'B' is present in the fourth hero's name
// console.log(countryHeroes[3].startsWith('Dr')); // Checks if the fourth hero's name starts with 'Dr'
// console.log(countryHeroes[3].endsWith('kar')); // Checks if the fourth hero's name ends with 'kar'
// console.log(countryHeroes[3].split(' ')); // Splits the fourth hero's name into an array of words
// console.log(countryHeroes[3].replace('B.R.', 'B.A')); // Replaces 'B.R.' with 'B.R' in the fourth hero's name
// console.log(countryHeroes[3].trim()); // Removes whitespace from both ends of the fourth hero's name
// console.log(countryHeroes[3].length); // Displays the length of the fourth hero's name 
// console.log(countryHeroes[3].charCodeAt(1)); // Displays the Unicode value of the second character of the fourth hero's name
// console.log(countryHeroes[3].concat(' is a great leader')); // Concatenates a string to the fourth hero's name
// console.log(countryHeroes[3].repeat(3)); // Repeats the fourth hero's


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("JavaScript")); // false, because it's a string, not an array
console.log(Array.from("JavaScript"));
console.log(Array.from({name: "JavaScript"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));