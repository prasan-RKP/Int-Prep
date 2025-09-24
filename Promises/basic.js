
// ----- Deinition -----
// ->  A promise is an object, that gives a eventual value of an asynchronous operation
// -> A promise is possible 3 states ,  ->  pending(at his initial stage processing), fulfilled(when it success), rejected(for some reason it fails)

// ---- creating a promise ----

// let promise  = new Promise((resolve, reject) => {
//    // some async operation
// });


// ----- Example -----

const promise = new Promise((resolve, reject) => {

    let success = false;

    if(success) {
        resolve("The operation was successful ✅");
    }
    else{
        reject("The operation failed ❌");
    }
})


//  ------ Handling result of a promise -----
.then((res)=> console.log(res))
.catch((err)=> console.log(err))
.finally(()=> console.log("Operaion Done"));



// ------ chaining Promises -------

new Promise((resolve, reject) => {
resolve(5);
})
.then((res)=>{
    console.log(res);
    return res * 2;
})
.then((res)=> {
    console.log(res)
    return res * 10;
})
.then((res)=> {
    console.log(res);
})
.catch((err)=> console.log(err + " error occured"));

