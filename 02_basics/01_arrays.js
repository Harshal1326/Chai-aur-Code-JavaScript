const myArr = [0, 1, 2, 3, 4, 5]

// const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr);
// console.log(myArr2);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));  // o/p: false
console.log(myArr.indexOf(9));  // o/p: -1

const newArr = myArr.join()
console.log(newArr);  // o/p: 1,2,3,4,5

// slice, splice

console.log("A ", myArr); // o/p: A [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3)

console.log(myn1);  // o/p: [1, 2]
console.log("B ", myArr); // o/p:B [0, 1, 2, 3, 4, 5, 6]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // o/p: C [0, 4, 5]
console.log(myn2);  // o/p: [1, 2, 3]