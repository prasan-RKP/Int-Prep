// Final conception
// Q.1) multiply by 'n'

// function multiply(n) {
//    return function(num) {
//         return num * n;
//    }
// }

// let numEx2 = multiply(2);

// console.log(numEx2(5));

//Q.2)Make a function secretPassword() that stores a password in a closure. It should return two functions:
//one to set the password,
//one to check if a given string matches the password.

// const secretPassword = () => {
// let password = "";
//     return {
//         setPassword: (newPassword) => {
//              password = newPassword;
//         },

//         checkPassword: (str) => {
//             return str === password;
//         }

//     }
// }

// const myPass = secretPassword();

// myPass.setPassword("mozillla");
// console.log(myPass.checkPassword("mozillla"));

/// ------------Medium ------------

//Q.1) Adder with Initial Value

// const Adder = (initialVal) => {
//   let total = null;
//   return function (val2) {
//     total = initialVal + val2;
//     return "The total is", total;
//   };
// };

// let add24 = Adder(24);
// console.log(add24(6));

// Q.2) Unique ID Generator

// const idGenerator = () => {

//     return function() {
//         let newId = null;
//         newId = Math.floor(Math.random() * 20);
//         return newId;
//     }
// }

// let gen = idGenerator();

// console.log(gen());

// Q.3) Once function

// function once(fn) {
//     let called = false;
//     let result;

//     return function(...args){
//         if(!called){
//             result = fn.apply(this, args);
//             called = true;
//         }
//         return result;
//     }
// }

// const addMe = (a, b) => a + b;

// const onceAdd = once(addMe);
// console.log(onceAdd(20, 30));
// console.log(onceAdd(70, 30));
// console.log(onceAdd(80, 30));

//Q.4) Remember Me

// const remember = () => {
//     let arr = [];
//   return function (...args) {
//       arr.push(...args);
//       return arr;
//       };
// };

// const r = remember();
// r(1, 2);
// r('a');
// r(3, 4, 5);
// console.log(r());

/// ------ Hard concept ----------

//Q.2) Toggle concept

// function toggle() {
//   let alternate = false;
//   return function (){
//        alternate = !alternate;
//        return alternate ? "ON" : "OFF";
//   }

//   };

// let qw = toggle();
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());

// Q.3) Module pattern
// function bankAccount() {
//   let balance = 3000;

//   return {
//     deposit: (amount) => {
//       balance = balance + amount;
//       return balance;
//     },
//     withDraw: (amount) => {
//       if (balance > amount) {
//         balance = balance - amount;
//         return balance;
//       }
//     },

//     getBalance: () => {
//       return balance;
//     },
//   };
// }

// const depo = bankAccount();
// console.log(depo.deposit(800));
// console.log(depo.withDraw(400));
// console.log(depo.getBalance());

// Rate Limiter

function rateLimiter(fn, limit) {
  let lmt = 0;
  return function (...args) {
    if (lmt < limit) {
      lmt++;
      return fn(...args);
    }
    return null;
  };
}


const on = (val) => {return val};

const app = rateLimiter(on, 3);
console.log(app("summer"));