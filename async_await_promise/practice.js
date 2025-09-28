// Example - 1

// -------------------- EASY LvL  --------------

// Q.1) Write an async function that fetches user data from https://jsonplaceholder.typicode.com/users/1 and logs the user’s name.
// const showDetail = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const data = await res.json();
//     console.log("user-1:",data?.name);
// }

// showDetail();

// Q.2)
// const showPost = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await res.json();
//     console.log("Title:",data?.title);
// }

// showPost();

// Q.3) Create a function wait(ms) that returns a promise resolved after ms milliseconds. Use await to print "Hello" after 2 seconds.

// const wait = async (ms) => {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, ms);
//   });

//   const data = await myPromise;

//   console.log(data);
// };

// wait(2000);

//Q.4)
// Handle Errors with Try/CatchFetch from a wrong API URL. Handle the error gracefully and print "API Failed".

// const fetchURL = async() => {

//     try {
//         const res = await fetch('https://jsonplaceholder.typ.com/posts/1');
//         if(!res){
//             throw new Error({message: "API failed"});
//         }
//         const data = await res.json();
//         console.log("Fetched Data", data);
//     } catch (error) {
//         if(error){
//             console.log(error.message);
//         }
//         else{
//             console.log("INternal sever error");
//         }
//     }
// }

// fetchURL();

//Q.5) Fetch users/1, then posts/1, then comments/1 step by step using async/await.

// const fetchSequentially = async () => {
 
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(res => res.json())
//     .then(userData =>{
//         console.log("userData", userData);
//         return fetch("https://jsonplaceholder.typicode.com/posts/1");
//     })

//     .then(res => res.json())
//     .then(postData => {
//         console.log("PostData", postData)
//        return fetch("https://jsonplaceholder.typicode.com/comments/1");
//     })

//     .then(res => res.json())
//     .then(commentData => console.log('CommentData', commentData))
//     .catch(err => console.log("Err",err))

// };

// fetchSequentially();



// ---------------- MEDIUM LvL  ---------------


//Q.1) 
// Run in Parallel with Promise.all Fetch users/1 and posts/1 in parallel, log both results.

// const allPromises = async() => {

//     const res1 = await fetch("https://jsonplaceholder.typicode.com/users/2")
//     const user1 = await res1.json();
    

//     const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/2')
//     const post = await res2.json();

//     Promise.all([user1, post])
//     .then((res)=> console.log(res))
//     .catch(err =>  console.log(err))
// }

// allPromises();



//Q.2)  
//Timeout Wrapper-> Write a function withTimeout(promise, ms) that rejects if the promise doesn’t resolve within ms milliseconds.


// const withTimeout = (promise, ms) => {
//     const myPromise = new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//              reject('Rejected & Time Over');
//         }, ms)
//     });

//     Promise.race([promise, myPromise]);
// }


// const p2 = new Promise((resolve)=> {
//     setTimeout(()=> {
//            resolve("Promise resolved");
//     },3000)
// })


// withTimeout(p2, 2000);





// Q.3) 

// const tasks = [
//     () => Promise.resolve("A"),
//     () => Promise.resolve("B"),
//     () => Promise.resolve("C"),
// ]


// const runSequential = (prs) => {
// prs.map(async(pr)=> {
//    await pr()
//     .then(res => console.log(res))
//     .catch(err => console.log('err', err))
    
// })
// }

// runSequential(tasks);




// Q.4) Implement a function that resolves with the first successful promise, or rejects if all fail.

// const allfail = (p1,p2) => {
//      Promise.any([p1, p2])
//      .then(res => console.log(res))
//      .catch(err => console.log("All failed"))
// }


// const p1 = Promise.reject("P1 crashed")
// const p2 = Promise.reject("p2 is now crashed");

// allfail(p1, p2)







// -------------- HARD LvL ---------------------

// Q.2) Chained Api requests(Dependency)

const APIrequest = async() => {

    const user = await fetch("https://jsonplaceholder.typicode.com/users/2") ;
    const userData = await user.json();

  
}

APIrequest();
