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





// Ques - 5(Function Composition)
var compose = function(functions) {
    
    return function(x) {
        
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
