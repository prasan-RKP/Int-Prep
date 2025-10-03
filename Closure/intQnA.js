// Q.1) Closure + Counter

// function createCounter(start) {
//   let count = start;
//   return () => ++count;
// }
// const c1 = createCounter(5);
// console.log(c1()); // 6
// console.log(c1()); // 7
// const c2 = createCounter(10);
// console.log(c2()); // 11
// console.log(c1()); // 8

// Q.2) Closure + this (Arrow vs. Function)
// function outer() {
//   this.value = 100;
//   return {
//     normal: function () {
//       return this.value;
//     },
//     arrow: () => this.value,
//   };
// }
// const obj = { value: 50 };
// const result = outer.call(obj);
// console.log(result.normal());
// console.log(result.arrow());

// Q.3) Closure + this Binding

// function outer() {
//   this.val = 1;
//   return () => {
//     return this.val;
//   };
// }
// const obj = { val: 42 };
// const fn = outer.call(obj);
// console.log(fn());

// ans - 1

// Q.4) Closure + event Listener

// function setup() {
//   let clicks = 0;
//   document.getElementById("para").addEventListener("click", () => {
//     clicks++;
//     console.log("Clicked:", clicks);
//   });
// }
// setup();

//

// Q,5) Secret Password

// function secretPassword() {

//   let pass = "abc123";

//   return function(guess){
//     if(guess === pass){
//     console.log("Yes it is your Password");
//     }
//     else{
//        console.log("Failed to guess Password");
//     }
//   }
// }

// let my = secretPassword();

// console.log(my("qwes123"));
// console.log(my("assdf123"));
// console.log(my("qwfnfn3"));
// console.log(my("abc123"));

// Q.6) Rate Limiter/Throttle


function throttle(fn, limit){
  let isThrottle = false;

  return function(...args){
    if(!isThrottle){
      fn(...args);
      isThrottle = true;
      setTimeout(()=> {
         isThrottle = false;
      }, limit)
    }
  }
}


const expensive = () => { console.log("I am Expensive & called"); };

let myFn = throttle(expensive, 2000);

myFn(); // Will run immediately
myFn(); // Ignored (within 2 seconds)
//setTimeout(myFn, 2100); // Will run after 2.1 seconds