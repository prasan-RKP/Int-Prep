//Functions in javascript
// Q.1) what is function expression

// code
// const sqaure = function(num) {
//     return  num * num;
// }

// It is called as annonymous fucntion
/*
function(num) {
    return  num * num;
} -> This segement called annonymous fucntion  which is assigned to a variable thats why it is called 'function expression"
*/

// Q.2) what are First class functions ?

// function sqaure(num) {
//     return num*num;
// }

// function displaySqaure(fn) {
//     console.log(fn(5));
// }

// displaySqaure(sqaure);

// A function that we can use as a varbale

// Q.3) IIFE (Immediately invoked function expression)
//example
/*(function displaySqaure(num){
    console.log(num *num);
})(6)
*/

// (function (x){
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1)  output->1

// Q.4) function scope - o/p based questions

// for(var i=0; i< 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }

// if var the outPut would be -> 5,5,5,5,5
//if let the output would be -> 0,1,2,3,4

//Q.5) Hoisting

// closure
//A closure gives a function access to variables from its outer function even after the outer function has alredy executed.

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add7 = makeAdder(7);

// console.log(add5(6));
// console.log(add7(8))

//1) greet name

// function greetName(name) {
//     return function(){
//          console.log("Name is", name);
//     }
// }

// const ans = greetName('Mozilla');
// console.log(ans())

//2)Counter

// const Counter = () => {
//     let count = 0;

//     return function() {
//       return ++count
//     }
// };

// const add = Counter();
// console.log(add()); 1
// console.log(add()); 2
// console.log(add()); 3
// console.log(add()); 4

// 3)Multiplier

// const Multiplier = (factor) => {
//    return function(mix) {
//        return factor * mix;
//    }
// }

// const opt5 = Multiplier(5);
// console.log(opt5(4));

// 4) make adder

// const makeAdder = (x) => {

//     return function(y){
//         return x + y;
//     }
// }

// const add5 = makeAdder(5);
// const add7 = makeAdder(7);

// console.log(add5(5));
// console.log(add7(8));

// medium

// let count = 0

// const makeCounter = () => {

//     return {

//         increment: function(){
//              count++;
//              return count;
//         },
//         decrement: function() {
//              count --;
//              return count;
//         }
//     }

// }

// const inc = makeCounter();
// const dec  = makeCounter();

// console.log(inc.increment());
// console.log(inc.increment());
// console.log(inc.increment());
// console.log(inc.increment());
// console.log(inc.increment());
// console.log(dec.decrement());

//2) Limited counter

// let count = 0;

// const makeCounter = () => {
//   return {
//     increment: function () {
//       if (count < 6) {
//         count++;
//         return count;
//       }
//     },
//     decrement: function () {
//       if (count > 0) {
//         count--;
//         return count;
//       }
//     },
//   };
// };

// const inc = makeCounter();
// const de = makeCounter();

// console.log(inc.increment());
// console.log(inc.increment());
// console.log(inc.increment());
// console.log(inc.increment());
// console.log(inc.increment());
// console.log(de.decrement());
// console.log(de.decrement());
// console.log(de.decrement());
// console.log(de.decrement());
// console.log(de.decrement());
// console.log(de.decrement());

// Remember Previous Input
// Write a function remember() that returns a function storing and printing the last input.
// Example:

// const rem = remember();
// rem(10); // Last input: 10
// rem(20); // Last input: 20

// const remember = () => {

//   let latInput = null;

//   return function (input) {
//     latInput = input;
//     console.log("The lastInput:", latInput);
//   };
// };

// const app = remember();

// app(23);
// app(10)

//  8)Create power(exponent) that returns a function taking a number and raising it to exponent.


const power = (exponent) => {
  let res = 1;

  return function(num) {
    for(let i=1; i<=exponent; i++){
        res = num * res;
    }

    console.log('The result is ', res);
  }
}

const exp4 = power(4);

console.log(exp4(2));


