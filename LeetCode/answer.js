// function dayName(dateStr){ // 10 /11/ 2023
//     let date = new Date(dateStr);
//     let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     // NOTE -> it will return the 'date.getDay()' -> 0,1,2,3,4,5,6 -

//     let dayName =  daysOfWeek[date.getDay()];
//     console.log(dayName);
// }

// dayName('10/11/2023');

// Question - 2

// function regExp (s) {

//     let vowelArr = ['a', 'e', 'i', 'o', 'u'];

//     let first = vowelArr[0];
//     let last = vowelArr[vowelArr.length - 1];

//     if(vowelArr.includes(first) && vowelArr.includes(last) && first === last){
//          console.log('True');
//     }

//     else{console.log('False');
//     }
// }

// LeetCode Question

//const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

// var timeLimit = function (fn, t) {
//   const start = performance.now();
//   let result;
//   return async function (...args) {
//     try {
//       let res = await fn(...args);
//       result = { "resolved": res, "time": Math.floor(performance.now() - start) };
//     } catch (error) {
//          result = { "rejected": error, "time": Math.floor(performance.now() - start) }
//     }

//     console.log(result);
//   };
// };

// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

// Q.4) imp Question

// const functions = [
//   () => new Promise((res) => setTimeout(() => res(1), 300)),
//   () => new Promise((res) => setTimeout(() => res(2), 200)),
//   () => new Promise((res) => setTimeout(() => res(2), 200)),
//   () => new Promise((_, reject) => setTimeout(() => reject("C Failed ❌"))),
// ];

// function promiseAll(functions) {
 
//  return new Promise((resolve, reject)=> {
      
//       let results = [];
//       let completed = 0;

//       if(functions.length === 0){
//         resolve([]);
//         return;
//       }

//       functions.forEach((fn, idx) => {
//         try{
//            fn()
//            .then(val => {
//             results[idx] = val;
//             completed++;

//             if(completed === functions.length){
//                 resolve(results)
//             }
//            })
//         }
//         catch(err){

//         }
//       })
//  })
// }




// Q.5) 


var map = function(arr, fn) {
 let myArr = [];

 for(let i=0; i<arr.length; i++){
    myArr.push(fn(arr[i]), i);
 }
      
};


let arr = [1,2,3];
function plusone(n) { return n + 1; }

console.log(map(arr, plusone));
