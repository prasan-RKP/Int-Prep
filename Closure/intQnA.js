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

function outer() {
  this.val = 1;
  return () => {
    return this.val;
  };
}
const obj = { val: 42 };
const fn = outer.call(obj);
console.log(fn());

// ans - 1

// Q.4) Closure + event Listener

function setup() {
  let clicks = 0;
  document.getElementById("para").addEventListener("click", () => {
    clicks++;
    console.log("Clicked:", clicks);
  });
}
setup();

