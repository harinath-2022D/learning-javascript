// console.log(x); // output : undefined
// getName() // output : whole function
// console.log(getName2); // undefined
// var x = 1;

// function getName(){
//     console.log(x); // undefined
//     console.log("Hello Java Script");
// }

// // treat as a normal variable
// var getName2 = function a(){ // creation phase getName2 = undefined
//     console.log("getName 2");
// }

// console.log(x); // output : 1
// getName()       // output : Hello Java Script
// console.log(getName2());


// example 2
// console.log(a)
// var a = function b(){
//     console.log('b');
// }
// console.log(a())


// Example 3 functional hoisting
// var x = 1;
// a();
// b();
// console.log(x) // 1
// function a(){
//     var x = 10;
//     console.log(x); // 10
// }
// function b(){
//     var x = 100;
//     console.log(x); // 100
// }

// console.log(x) // 1


/* 
// java script is loosly tighed language
// Example 3 Undefined vs not defined
// undefined != empty hsving memory space

console.log(x) // undefined
var x  =10;

var a;
console.log(a) // undefined

console.log(b) // not defined error

*/