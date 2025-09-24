// Example - 1 (take a function with 'some' arg and insid ethe fucntion the 'demo' id innerHTML will be show according to the promise result)

// function changeTXt(text) {
//   document.getElementById("demo").innerHTML = text;
// }

// let myPromise = new Promise((resolve, reject) => {
//   let x = 0;

//   if (x === 0) {
//     resolve("FOLLLOW");
//   } else {
//     reject("NOT FOLLOW");
//   }
// });

// myPromise.then((res) => {
//     changeTXt(res);
// });

// myPromise.catch((err)=> {
//     changeTXt(err);
// })

// Example - 2 (Waiting for a Timeout)

// let myPromise = new Promise((resolve, reject) => {

//     setTimeout(()=> {
//         resolve("Mozilla FireFox");
//         reject("Error"); // any second 'result' will be ignored
//     }, 4000);
// });

// myPromise.then((res)=> {
//     document.getElementById("demo").innerHTML = res;
// });

// Example - 3 (Waiting for a File)

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise((resolve, reject)=> {
//     let req = new XMLHttpRequest();
//     req.open('GET', 'myCar.html');
//     req.onload = () => {
//         if(req.status === 200){
//             resolve(req.response);
//         }
//         else{
//             reject("File not Found");
//         }
//     };
//     req.send();
// });

// myPromise.then((res) => {
//      myDisplayer(res);
// });

// myPromise.catch((err)=>{
//     myDisplayer(err);
// })

// Example - 4 (condtion based)
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randNum = Math.floor(Math.random() * 100);
//     if (randNum < 25) {
//       resolve("Data has been successfully retrieved: " + randNum);
//     } else {
//       reject("Error: Data retrieval failed: " + randNum);
//     }
//   }, 1000);
// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Operation completed");
//   });

// Example - 5 (basic chaining)
//   let  promise = new Promise((resolve, reject)=> {
//     resolve(5);
//   });

//   promise
//   .then(num => num * 2)
//   .then(num => num * 5)
//   .then(num => num - 20)
//   .then(num => console.log("num", num))
//   .catch(err => console.log(err))
//   .finally(()=> console.log("Implemented"))

// Example - 6 (Returning Promises in Chain)
// function fetchNumber() {
//   return new Promise((resolve) => setTimeout(() => resolve(10), 1000));
// }

// fetchNumber()
//   .then((num) => {
//     console.log("Fetched", num);
//     return num * 3;
//   })
//   .then(
//     (num) => new Promise((resolve) => setTimeout(() => resolve(num + 5), 1000))
//   )
//   .then(
//     (res) => new Promise((resolve) => setTimeout(() => resolve(res * 2), 1000))
//   )
//   .then((res) => console.log("Final result", res));

// example - 7 -> (error handling in chain)
// Promise.resolve("Start")
// .then(val => {
//   console.log(val);
//   throw new Error("Something went Wrong !");
// })

// .then(()=> console.log("This will not run"))
// .catch((err)=> console.log("caught:", err.message))
//  .then(() => console.log("Chain continues after error"));





// Example - 8 (Chaining promises Multiple Promises)
// function step1() {
//   return Promise.resolve(2);
// }

// function step2(num) {
//   return Promise.resolve(num * 3);
// }

// function step3(num) {
//   return Promise.resolve(num + 4);
// }

// step1()
//   .then(res => step2(res))
//   .then(res => step3(res))
//   .then(finalResult => console.log("Final Result:", finalResult))
//   .catch(err  => console.log(err))
//   .finally(()=> console.log("completed."))


function fetchUser(id) {
  return Promise.resolve({id, name: "Alice"});
}

function fetchPosts(user) {
  console.log("Fetching posts for", user);
  return Promise.resolve([`Post1 of ${user.name}`, `Post2 of ${user.name}`])
}

fetchUser(1)
.then(res => fetchPosts(res))
.then(posts => console.log("User Posts", posts))