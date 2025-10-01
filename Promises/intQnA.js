// ------- Preparation --------

// -------- EASY LvL ---------

// Q.1) Create a promise that resolves with "Hello World" after 2 seconds.

// const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         resolve("Hello World");
//     }, 2000)
// });

// promise
// .then(res => console.log(res))
// .catch(err => console.log("Err", err))
// .finally(()=> console.log("Operation Completed"));

// Q.2) Chain promises to start with a number 2, multiply it by 3, then add 5, and log the final result.
// const pr2 = new Promise((resolve, reject)=> {
//   resolve('2');
// });

// pr2
// .then(res =>{ return res * 3})
// .then(res=> {return res + 5})
// .then(res => console.log(res))

//Q.3) Write code to catch an error in a promise chain and still continue execution after the error.

// const promise = new Promise((resolve, reject) => {
//     reject("Something went wrong");
// });

// promise
//      .catch(err => {
//         console.log("Caught an error:", err)
//         return 42;
//     })
//     .then(res => console.log("Continuing execution with value:", res))

// Q.4) Explain the difference between Promise.all and Promise.allSettled with a small code example.

// const p1 = Promise.resolve("Promise 1 resolved");
// const p2 = Promise.reject("Promise 2 rejected");
// const p3 = Promise.resolve("Promise 3 resolved");
// const p4 = Promise.reject("Promise 4 rejected");

// Promise.all([p1, p2, p3, p4])
// .then(res => console.log("Promise.all opt: ->", res));

// Promise.allSettled([p1, p2, p3, p4])
// .then(res => console.log("All promises all-settled: ->", res));

// Q.5) what will be the output ?
// console.log("Start");
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");
// start -> End -> Promise

//  --------- MEDIUM LvL -----------

// Q.1) Write an async function to fetch data from two APIs sequentially, and log the total time taken.

// const fetchData = async () => {
//   const start = Date.now();

//   const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data1 = await res1.json();

//   const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//   const data2 = await res2.json();

//   console.log("Time taken:", Date.now() - start / 1000,"s");
// };

// fetchData();

// Q.2) Now modify it to fetch both APIs in parallel using Promise.all.

// async function fetchParallel(params) {
//     const start = Date.now();

//     const [res1, res2] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/posts/1"),
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ]);

//     const data1 = await res1.json();
//     const data2 = await res2.json();

//     console.log(data1, data2);

//     console.log("Time taken in parallel:", (Date.now() - start) / 1000, "s");

// }

// fetchParallel();

//Q.3) Difference between Promise.race and Promise.any

// const  p1 = new Promise((_, reject)=> setTimeout(()=> reject(" failed p1"), 1000));
// const p2 = new Promise(resolve => setTimeout(()=> resolve("Success 2"), 2000));

// const p3 = new Promise(resolve => setTimeout(()=> resolve("Sucess 3"), 3000));

// Promise.race([p1,p2,p3])
// .then(res => console.log("Race resolved", res))
// .catch(err => console.log("Race rejected", err))

// // Any → first fulfilled (ignores rejects until one resolves)
// Promise.any([p1,p2, p3])
// .then(res => console.log("Any first resolved",res))
// .catch(err => console.log("Any rejected", err));

// Q.4)Write a function that retries a promise up to 3 times if it fails, then rejects.

// function retryPromise(task, retries = 3){
//     return new Promise((resolve, reject)=> {
//         function attempt(remaining) {
//             task()
//             .then(resolve)
//             .catch(err => {
//                 if(remaining === 0) reject (err);

//                 else{
//                     console.log(`Retrying... attempts left: ${remaining}`);
//                     attempt(remaining - 1);
//                 }
//             })
//         }
//         attempt(retries);
//     })
// }

// //Example task that fails randomly

// function unstableTask(){
//     return new Promise((resolve, reject)=> {
//         if (Math.random() > 0.27) resolve("Success !");
//         else reject('Random Failure');
//     })
// }

// retryPromise(unstableTask, 3)
// .then(console.log)
// .catch(console.error);

//Q.5) Predict the output
// Promise.resolve("start")
//        .then(res => {
//         console.log(res);
//         throw new Error("step 2 failed");
//        })
//        .then(()=> console.log("step 3"))
//        .catch(err => console.log("Caught:", err.message))
//        .then(()=> console.log("step - 4"));

//        // output -> "start" -> caught: step 2 failed -> step - 4

// -------------  Extra  MEDIUM LvL questions -----------

//Q.1) Write a function withTimeout(promise, ms) that rejects if the promise doesn’t resolve within ms milliseconds.

// functional idea to implement is we have to implement two promises and then race will decide which one will display

// const timeOut = (promise, ms) => {
//   const myPromise = new Promise((_, reject)=>{
//        reject("something went wrong");
//   },ms);

//   return Promise.race([promise, myPromise]);
// }

// const checkPromise = new Promise((resolve, reject)=> {
//       setTimeout(()=> {
//          resolve("")
//       }, 2000)
// });

// timeOut(checkPromise, 3000)

// Q.2) Write a function runSequential(tasks) that executes them one after another and collects results.
// const runSequential = async(tasks) => {
//   const results = [];
//   for (const task of tasks) {
//     const result = await task();
//     results.push(result);
//   }
//   return results;
// };

// const works = [
//   () => Promise.resolve("Task 1"),
//   () => Promise.resolve("Task 2"),
//   () => Promise.resolve("Task 3"),
// ];

// runSequential(works).then(console.log)





//Q.3) First Success (Custom any)

// function firstSuccess(promises) {
//   Promise.any(promises)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => console.log("Err", err));
// }

// const p1 = Promise.reject("Something went wrong");
// const p2 = Promise.reject("cancelled all the way");
// const p3 = Promise.resolve("I am p3 i am resolved");
// const p4 = Promise.resolve("I am p4 & failed");


// firstSuccess([p1,p2,p3,p4]);




//Q.4) Task Queue(limit Concurrency)
// You have 10 async tasks, but you want to run only 2 at a time until all are done.

const runWithLimits = (tasks, limit) => {

}


