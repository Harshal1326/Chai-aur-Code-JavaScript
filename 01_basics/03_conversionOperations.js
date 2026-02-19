let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber);

let a = null
let valueInNumber1 = Number(a)
console.log(valueInNumber1);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true; 0 => false
// "" => false;
// "harshal" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ------- OPERATIONS --------- //

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " harshal"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3 + 4) * 5 % 3);

console.log(true);
console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);








