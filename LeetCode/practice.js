// Ques - 1 (To Be Or Not To Be)

// var expect = function (val) {
//   return {
//     toBe: (inVal) => {
//         if(val === inVal) {
//             console.log("TRUE");
//             return true;
//         }
//         else{
//             throw new Error("Not Equal");
//         }
//     },

//     notToBe: (inVal) => {
//           if(val !== inVal) {
//             return true;
//         }
//         else{
//             throw new Error("Equal");
//         }
//     },
//   };
// };

//  expect(5).toBe(5);



//  Ques -2 ( Apply Transform over Each Element in Array)

// var map = function(arr, fn) {
// let myArr = [];
//       for(let i=0; i<arr.length; i++) {
//          myArr.push(fn(arr[i], i));
//       }

//       return myArr;
// }



// Ques - 3 (Filter Elements from an Array)
// var filter = function(arr, fn) {
//     let myArr = [];
//     for(let i=0; i<arr.length; i++) {
//         if(fn(arr[i], i)){
//             myArr.push(arr[i]);
//         }
//     }
//     return myArr;
// };



//  Ques - 4(Array reduce Transformation)

// var reduce = (nums, init, fn) => {
//  let res = init;
//  for (let i = 0; i < nums.length; i++) {
//     res = fn(res, nums[i]);
//  }
// }

// // output -> Explain
// let nums = [1, 2, 3, 4];
// let fn = function sum(accum, curr) { return accum + curr; }
// let init = 0;

// console.log(reduce(nums, fn, init)); // Output: 10



// // Ques - 5(Function Composition)

// var compose = function (functions) {
//   return function (x) {
//     let temp = x;
//     if (functions.length === 0) {
//       return x;
//     }

//     for (let i = functions.length - 1; i >= 1; i--) {
//       temp = functions[i](temp);
//     }

//     return temp;
//   };
// };

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// console.log(fn(4));




// Ques - 6 -> Amazon Interview Question  (Kth Factor of N)
// var kthFactor = function(n, k) {
//     if( n=== k){
//         return -1;
//     }

//     let arr = [];
  
//     for(let i=1; i<=n; i++){
//         if(n % i === 0){
//             arr.push(i);
//         }
//     }


//     console.log(arr);

//     let val = arr.find((num, idx)=> idx + 1 === k ? num : "");
//     return val;
// };
// console.log(kthFactor(7, 2));



// Q.7) Allow one function to call
// var once = function (fn) {
//   let count = 0;
//   return function (...args) {
    
//     if (count === 0) {
//       count++;
//       return fn(...args);
//     } else {
//       return undefined;
//     }
//   };
// };

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);

// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling





// Q.8) Join two arrays by ID

// var join = function(arr1, arr2) {
//     let map = {};

//     arr1.forEach((obj)=> {
//         map[obj.id] = obj;
//     });

//     arr2.forEach((obj)=> {
//         if(map[obj.id]){
//             map[obj.id] = {...map[obj.id], ...obj};
//         }
//         else{
//             map[obj.id] = obj;
//         }
//     })

//     return Object.values(map);
// };

/*

*/

// Q.9) Return length of Argument passed

// function showArgLength(...args) {
//     let arr = [...args];
//     return arr.length;
// }

//  console.log(showArgLength(1,2,3,8966));



// Q.10) Allow one function call
// var once = function(fn) {
//     let count = 0;
//     return function(...args){
//           if(count === 0){
//             count ++;
//             return fn(...args);
//           }

//           else{
//               return undefined;
//           }
//     }
// };

// let fn = (a, b, c) => {
//   return a + b + c;
// };

// let onceFn = once(fn);

// console.log(onceFn(1,2,3));
// console.log(onceFn(3,4,2));
// console.log(onceFn(3,4,2));
// console.log(onceFn(3,4,2));




// Q.11) Add Two Promises
// var addTwoPromises = async function(promise1, promise2) {
//      let p1 = await promise1;
//      let p2 = await promise2;

//      return p1 + p2;
// };


// Q.12) Sleep 
// async function sleep(millis) {
//     return new Promise((res, rej)=> {
//         setTimeout(()=>{
//         res();
//         }, millis)
//     })
// }




//Q.13)   Time cancelletion 
/*
Note-> Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.  (Read here to get the whole answer).

*/

var cancellable = function(fn, args, t) {
  // Schedule fn to run once after t milliseconds
     let timer = setTimeout(()=> {
        fn(...args);
     }, t)

  // Return a cancel function
   return () => clearTimeout(timer);
};

