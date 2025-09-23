// ---- easy LvL -----

//Q.1) Variable Hoisting with var
// console.log(a);
// var a = 10;
// console.log(a);
// output: - undefined, 10

// Q.2) Function Hoisting vs. Variable Hoisting
//--start---
// greet();
// function greet() { console.log("Hello"); }

// sayHi();
// var sayHi = function() { console.log("Hi"); };
//--- End --

// explain the differnece
// output: - Hello, TypeError: sayHi is not a function
// In the first case, the function greet is hoisted entirely, so it can be called before its declaration.

// In the second case, only the variable sayHi is hoisted, not the function expression assigned to it.

// Therefore, when sayHi is called before its assignment, it results in a TypeError.

// Q.3) Temporal Dead Zone (TDZ) Basics

// console.log(x);
// let x = 5;

// Why does this throw an error instead of undefined?
// output: - ReferenceError: Cannot access 'x' before initialization

// ---- medium LvL-----

// Q.1) Inner Scope Shadowing
// var x = 1;
// function test() {
//   console.log(x); // 1

//   var x = 2;
//   console.log(x);
// }

// test();

// I predcited the ans 2 but exlain me
// Explain why the first console.log outputs undefined instead of 1.
// output: - undefined, 2
// In the function test, the variable x is declared with var inside the function scope.
// Due to hoisting, the declaration of x is moved to the top of the function, but its assignment (x = 2) remains in place.

// Q.2) Function vs. Block Scope Hoisting
// {
//   console.log(msg);
//   var msg = "with var";
// }
// {
//   console.log(msg);
//   let msg = "with let";
// }
// // output- undefined, reference Error

// Q.3) Hoisting Order in Functions
// function demo() {
//   console.log(a);
//   console.log(b);
//   var a = 1;
//   let b = 2;
// }
// demo();

// Expalin the answer please

// Q.4) Function Declaration Overriding

// before hoisting
function foo() {
  console.log("first");
}
var foo = function () {
  console.log("second");
};
foo();

// after hoisting
// Hoisted:
var foo; // declaration hoisted, assignment not yet
function foo() {
  console.log("first");
} // function hoisted

// Actual code runs:
foo = function () {
  console.log("second");
}; // assignment
foo(); // calls the new function

// However, if a variable and a function have the same name, the variable declaration will overwrite the function declaration in the environment.   -> output is "second";
