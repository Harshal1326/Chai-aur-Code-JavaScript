const name = "harshal"
const repoCount = 50

console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshalhs')

console.log(gameName[0]);  // o/p: h
console.log(gameName.__proto__);  // o/p: {}

console.log(gameName.length);  // o/p: 9
console.log(gameName.toUpperCase());  // o/p: HARSHALHS
console.log(gameName.charAt(2));  // o/p: r
console.log(gameName.indexOf('r'));  // o/p: 2

const newString = gameName.substring(0, 4);
console.log(newString);  //o/p: hars

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);  // o/p: ars

const newStringOne = "     harshal     "
console.log(newStringOne);         // o/p:      harshal     
console.log(newStringOne.trim());  // o/p: harshal

const url = "https://harshal.com/harshal%20shinde"
console.log(url.replace('%20', '-'));  // o/p: https://harshal.com/harshal-shinde
console.log(url.includes('sundar'));  // o/p: false
console.log(url.includes('harshal'));  // o/p: true

const gameNameTwo = new String('harshal-shinde-dot')
console.log(gameNameTwo.split('-'));  // o/p: ['harshal', 'shinde', 'dot']
