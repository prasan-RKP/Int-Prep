
// Example- 1 using prmoise in real world scenario

// const getWeatherData = (city) => {

//     return new Promise((resolve, reject)=> {
//         const apiKey = "your_api_key_here";
//             const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&amp;q=${city}`;

//             fetch(apiUrl)
//             .then(res => {
//                 if(res.ok){
//                     return res.json();
//                 }
//                 else{
//                     throw new Error("Unable to fetch weather Data");
//                 }
//             })

//             .then(data=> resolve(data))
//             .catch(err => console.log('Error', err))
//     })
// }




// ---------  How to Handle Multiple Promises - ? --------------

// -> The Promise.all() method takes an array of Promises as its argument and returns a new Promise that resolves when all the Promises in the array have resolved successfully. If any of the Promises in the array is rejected, the entire Promise.all() operation is rejected. The resolved values of the individual Promises are collected into an array in the same order as the original array.

// ---------- points --------
//1) .all -> promise will take promises as an arguments
//2) if any of the promises will get rejected it will not go forward.
//3)it will show you in same order as per you args you given (like which one should display first)

// ###########    Promise.all()  ##########

// const promise1 = new Promise(resolve => setTimeout(()=> resolve("Promise 1"),2000));
// const promise2 = new Promise(resolve => setTimeout(()=> resolve("Promise 2"),2000));
// const promise3 = new Promise(resolve => setTimeout(()=> resolve("Promise 3"),2000));
// const promise4 = new Promise(resolve => setTimeout(()=> resolve("Promise 4"),2000));


// Promise.all([promise4, promise3, promise2, promise1])
// .then(res => {
//     console.log("All Promise resolved", res);
// })
// .catch((err)=> console.log("Err", err));







// -------------- Promise.race() ---------------

// Defn -> The Promise.race() method takes an array of Promises and returns a new Promise that settles (resolves or rejects) as soon as any of the Promises in the array settles. It resolves with the value of the first Promise that resolves or rejects with the reason of the first Promise that rejects.


// const promise5 = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         reject("Somethifnd went dodmfnf")
//     }, 1000)
// });
// const promise6 = new Promise(resolve => setTimeout(()=> resolve("Promise 6"),3000));

// Promise.race([promise6, promise5])
// .then(res => console.log(res))
// .catch(err => console.log())



// ------------- Promise.allSettled -----------

// const showStatus = (code) => {
//     console.log(`The status-code is: ${code}`)
// }

// const myPromise1 = new Promise((resolve, reject)=> {
//     setTimeout(resolve,1000, "King");
// })

// const myPromise2 = new Promise((resolve, reject)=> {
//     setTimeout(resolve,1000, "Queen");
// })

// Promise.allSettled([myPromise1, myPromise2]).then((res)=> 
//    console.log(res)
// )



const p1 = Promise.resolve("A");
const p2 = Promise.reject("B failed");
const p3 = new Promise(res => setTimeout(() => res("C"), 100));

Promise.all([p1, p3]) // Works fine
  .then(console.log); // ["A", "C"]

Promise.all([p1, p2, p3]) // One fails
  .catch(console.error); // "B failed"

Promise.race([p2, p3]) // First to finish
  .catch(console.error); // "B failed" (if p2 finishes first)

Promise.allSettled([p1, p2, p3]) // Full report
  .then(console.log);
[
  { status: "fulfilled", value: "A" },
  { status: "rejected", reason: "B failed" },
  { status: "fulfilled", value: "C" }
]

