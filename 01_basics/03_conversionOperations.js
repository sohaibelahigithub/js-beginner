let score = "24"
let score_alpha = "24abc"
let score_null = null
let score_bool = true

// console.log(typeof(score));
// console.log(typeof(score_alpha));


// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));

// let valueInNumber = Number(score_alpha)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);


// let valueInNumber = Number(score_null)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);


// let valueInNumber = Number(score_bool)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// Basic Conversions to Number
// "24" => 24
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 0
// let isLoggedIn = ""
let isLoggedIn = "Sohaib"

// Empty String "" => Gives False
// 1 => true; 0 => false
// "Sohaib" => true

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// String Conversion
let aNumber = 3
let stringNumber = String(aNumber)

// 3 => "3" => String
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************** Operations *****************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);   // Add
// console.log(2-2);   // Subtract
// console.log(2*2);   // Multiply
// console.log(2**2);  // Power
// console.log(2/3);   // Divide
// console.log(2%3);   // Remainder


let str1 = "hello"
let str2 = "Sohaib"
// Concatenation
let str3 = str1 + str2
//console.log(str3);

// ECMA Standards Primitive
// console.log("1" + 2);       // 12
// console.log(1 + "2");       // 12
// console.log("1" + 2 + 2);   // 122   
// console.log(1 + 2 + "2");   // 32

// console.log((3+4) * 5 % 3); // BODMAS Rule, Answer => 2


// console.log(+true); // 1
// console.log(+""); // 0

// let num1, num2, num3
// num1 = num2 = num3 = 2+ 2; // Inconsistent Code

let gameCounter = 100;
// Postfix
gameCounter++; // Increment (+1) in gameCounter

// Prefix
++gameCounter; // Increment (+1) in gameCounter

console.log(gameCounter);
