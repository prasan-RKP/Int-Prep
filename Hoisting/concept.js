// ------------ HOISTING --------------
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.

x = 5;
elem = document.getElementById("demo");
elem.innerHTML = x;

var x; // Variable declaration is hoisted


// ------ The  'let' & 'const'  keywords ----

// -----  'Let' ----

// -> Variables defined with  'let'  and  'const' are hoisted to the top of the block, but not initialized.
// -> meaning the block of the code is unaware about the varivable, it cannoy be accessed before it has been declared.
  // so gives us a 'ReferenceError'  if we try to access the variable before declaration.

  //The variable is in a "temporal dead zone" from the start of the block until it is declared:

//Example 1: - 

// carname = "Volvo"; // ReferenceError
// let carname;
// console.log(carname);


// ---- Const ----
// Using a 'const' variable before it is declared will give a 'syntax error'.

// Example - 2 
// carname = "Volvo"; 
// const carname;
// console.log(carname);


//  ---- var -----
// bascially 'var' is function scoped, it is not block scoped.
// Example - 3
// if (true) {
//     console.log(carname);
//   }
//    // Volvo
// var carname = "Volvo";



// #######  'Function Declarations'  &  "Function Expressions'"

// let my try this one tell me is it correct or not 

// ------Function Declaration --------
function getName(num) {
    return num;
}

const res = getName(45);
console.log(res);

// ------Function Expression --------

let showName = function(name) {
    return name;
}

const ans = showName("mac");


/// The only difference is 'Function Expression' -> there is no function name and in 'function declaration' -> there is a function name (thats the major difference);
 



