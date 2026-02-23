const score = 400
console.log(score);  // o/p: 400

const balance = new Number(100)
console.log(balance);  // o/p: [Number: 100]

console.log(balance.toString());  // o/p: 100

console.log(balance.toString().length);  // o/p: 3
console.log(balance.toFixed(2));  // o/p: 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  // o/p: 23.9

const hundereds = 1000000
console.log(hundereds.toLocaleString());  // o/p: 1,000,000
console.log(hundereds.toLocaleString('en-IN'));  // o/p: 10,00,000


// ----- Math -----

console.log(Math)  // o/p: Object [Math] {}

console.log(Math.abs(-4));  // o/p: 4
console.log(Math.abs(4));  // o/p: 4
console.log(Math.round(4.3));  // o/p: 4
console.log(Math.round(4.6));  // o/p: 5
console.log(Math.ceil(4.2));  // o/p: 5
console.log(Math.floor(4.9));  // o/p: 4
console.log(Math.min(4, 3, 6, 8));  // o/p: 3
console.log(Math.max(4, 3, 6, 8));  // o/p: 8
console.log(Math.random());
console.log(Math.random());

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));  // o/p: randomly selects value from 10 to 20
