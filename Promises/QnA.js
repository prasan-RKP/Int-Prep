
// ----------  Easy LvL ------------

//Q.1) Resolve after delay

// const delay = (ms) => {
//      return new Promise((res, rej)=> {
//         setTimeout(()=> {
//             console.log("Promise, Resolved after 3 second");
//         }, 3000)
//      })
// }

// delay();


// // Q.2) 

// const promise = new Promise((resolve, reject)=> {
//     resolve("Hello");
// })

// promise.then((res)=> console.log(res,"World"));

// // Q.3) 

// const promise2 = new Promise((resolve, reject)=> {
//          reject("Somethign went wrong");
// })
// promise2.then((res)=> console.log(res));
// promise2.catch((err)=> console.log(err));

// //Q.4) 

// Promise.resolve(42).then((res=> console.log(res)));

// // Q.5)

// const promise3 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         reject('Reject after 2 seconds');
//     },2000)
// });

// promise3.then((res)=> console.log(res));
// promise3.catch((err)=> console.log(err));
// promise3.finally(()=> console.log("Cleanng UP"));




//-------------  Medium LvL ------------

//Q.1) Order of execution

console.log("Start");

Promise.resolve().then(()=> console.log("Promise"));
setTimeout(()=> console.log("Timeout"), 0);

console.log("End");
// Ans-> start, end, Promise, output