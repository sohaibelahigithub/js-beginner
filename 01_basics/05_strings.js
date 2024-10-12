const name = "Sohaib" 
const repoCount = 50
//.. Concatenate, Bad Syntax

// console.log(name + repoCount + " Value");

//.. String Interpolation, Better Syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//.. Declare String using an Object Syntax
//.. Enables Strings Methods
const gameName = new String('Sohaib');
// console.log(gameName[0]);        //S
// console.log(gameName.__proto__); //{}

// console.log(gameName.length);    //6

// console.log(gameName.toUpperCase());  //SOHAIB

// console.log(gameName.charAt(2));    //Returns character in given position


// console.log(gameName.indexOf('h'));    //Returns index of given character

// const newString = gameName.substring(0,4)
// console.log(newString); // Returns Characters of the given String to the given range, Returns 4 starting characters

// ..Negative Index returns index from the end of String
// const newString = gameName.slice(-4, 4)
// console.log(newString);

// const newString = "     sohaib      "
// console.log(newString);

// //.. Remove Starting and Ending Garbage Spaces in String
// console.log(newString.trim());


const url = "https://google.com/sohaib%20elahi"

// // Replace a part of string
// console.log(url.replace('%20', '-'));

// // Returns if a given string includes a specific substring
// console.log(url.includes('sobi'));  // false

// Splits String in an Array by a given Seperator
const myName = "Sohaib-Elahi-22"
console.log(myName.split('-')); // [ 'Sohaib', 'Elahi', '22' ]



