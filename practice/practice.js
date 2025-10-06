
// Ans1)

// const showDetail = async() => {
//   const res = fetch('https://jsonplaceholder.typicode.com/users/1');
//   const data = await res.json();
//   console.log(data);
// }

// showDetail();


//Ans2) 

// const waitMs = (ms) => {

//   const myPromise = new Promise((resolve)=> {
//     setTimeout(()=> {
//           resolve("Hello");
//     }, ms)
//   });

//   return myPromise;
// }

// const pr = waitMs(2000);

// pr
// .then(res => console.log(res))
// .catch(err => console.log(err));



// Ans3) Handle Errors with Try/CatchFetch from a wrong API URL. Handle the error gracefully and print "API Failed".

// const apiFailed = async() =>{

//   try {
//     let res = fetch('https://jsonplaceholder.typ/posts/1');
//     let data = await res.json();
    
//     console.log(data);
  
//   } catch (error) {
//      throw new Error("API Failed... Try Again...");
//   }
// }

// apiFailed();


// 

// const multipleAPI = async() => {

//   fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((res)=> {
//     console.log(res.json());
//     return fetch('https://jsonplaceholder.typicode.com/posts/1')
//   })

//   .then((res)=> {
//     console.log(res.json());
//     return fetch('https://jsonplaceholder.typicode.com/comments/1')
//   })
//   .then(res=> console.log(res.json()))
//   .catch(err => console.log(err));
  
// }

// await multipleAPI();


// Q.3) 

// const allPromises = async() => {
//   const res1 = await fetch('https://jsonplaceholder.typicode.com/users/1');

//   const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');

//   Promise.all([res1, res2])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
// }

// allPromises();




//Q.4) 

// const withTimeout = (promise, ms) => {

//    const res = setTimeout(()=> {
//        promise
//        .then(res => console.log(res))
//        .catch(err => console.log(err))
//    }, ms)

//    return res;
// }


// const pr1 = Promise.resolve("Promise resolved");

//  withTimeout(pr1, 2000)




// Q.5) Implement a function that resolves with the first successful promise, or rejects if all fail.


// const allPromises = (p1,p2) => {

//     Promise.any([p1, p2])
//     .then(res => console.log(res))
//     .catch(err => console.log("One of the execution failed"))
// }

// const p1 = Promise.reject("P1 rejected");
// const p2 = Promise.reject("P2 rejected");

// allPromises(p1, p2);




// ------- CLosure  ------------

//QA.1)  Multiplier factory

// const multiplier = (factor) => {
//     return function(n){
//        return factor * n;
//     }
// }

// let mul5 = multiplier(5);
// console.log(mul5(6));



//Q.2) limited counter 

function maxLimit(max) {
     let count = 0;
    return function(){
         if(count < max){
            count ++;
         }

         return count;
    }
}

let max = maxLimit(4);

console.log(max());
console.log(max());
console.log(max());
console.log(max());
console.log(max());console.log(max());console.log(max());


// Remember the previous input