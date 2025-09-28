
// Async -> The keyword 'async' before a function makes the fucntion return apromise.
// await -> i) The await keyword can only be used inside an async function.
 // ii) The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

 // Example - 1 -> Basic syntax

//  async function myDisplay() {
//     let myPromise = new Promise((resolve, reject)=> {
//         resolve("Mozilla FireFox");
//     })

//     document.getElementById("demo").innerHTML = await myPromise;
//  }

//  myDisplay();



 // Example -2 (waitting for a timeout)
//  async function myDisplay() {
//     let myPromise = new Promise((resolve)=> {
//           setTimeout(()=> {
//                 resolve("interval Resolved")
//           },2000)
//     });

//     document.getElementById("demo").innerHTML = await myPromise;
//  }

//  myDisplay();


 

 // Example- 3 (Waiting for a file)

 const getmyFile = async() => {

    const myPromise = new Promise((resolve)=> {
        let req = new XMLHttpRequest();
        req.open('GET', 'uploadFile.html');
        req.onload = () => {
            if(req.status === 200){
                resolve(req.response);
            }
            else{
                resolve("File not Found");
            }
        }
        req.send();
    })

    document.getElementById("demo").innerHTML = await myPromise;
 }

 getmyFile();


 // Example - 4 (Error handling in Async/Await)
 
 const fetchData = async() => {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data", error);
    }
 }


