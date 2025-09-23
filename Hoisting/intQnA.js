//  ---------####### INTERVIEW STYLE PREPARATION #####______


// Q.1)Combined Function & Variable Hoisting

// after hoisting 
var x = 10;  

function test() {  
  console.log(x);  
  var x = 20;  
  function x() {}  
  console.log(x);  
}  

test();

//output-> 20, 20


//Q.2) Default Parameters + Hoisting

tricky();
function tricky(b = 2, a = b) {
    console.log(a,b)
}

// output -> 2, 2

// Q.3) Hoisting + typeof trap
// console.log(typeof a);  
// console.log(typeof b);  

// var a = 1;  
// let b = 2;

// output -> undefined, ReferenceError: Cannot access 'b' before initialization


// Q.4) Hoisting inside a for loop (closure trap)
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 0);
// }

// output -> Doubt



// Q.5) Function declaration inside block scope (non-strict vs. strict mode)

if(true){
    function foo(){console.log("Inside");}
}
foo();  // output-> inside


// Q.6)Hoisting with default parameter referencing later variable
var x = 1;
demo();
function demo(a = x, b = a + x){
    // a=1, b=2
    var x = 2;
    console.log(a,b, x);
}

// output-> 1,2,2

