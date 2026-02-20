// // Primitive datatype:- its call by value

// // 7 Types: String, Number, Boolean, null, undefined, symbol, BigInt

// // Reference datatype(Non Primitive):- its refrence is directy allocate in memory

// // Array, Objects, Functions

// // Datatype is DYNAMICALLY typed language

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail; // this is an "undefined" datatype

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)


// const bigNumber = 34567891012131415n  // bigint 

// const heros = ["shaktiman", "naagraj", "doga"];  // array - datatype

// let myObj = {  
//     name: "harshal",  // Object - datatype
//     age: 22,
// }

// const myFunction = function() {  // Finction - datatype
//     console.log("Hello World");
// }

// myFunction();


// -----HEAP AND STACK MEMORY-----

// Stack(Primitive), Heap(Non- PRimitive)

let myYtName = "harshalshindedotcom"

let anotherName = myYtName
anotherName = "chaiaurcode"

console.log(myYtName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "harshal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





