
// Q.1) 

// const students = {
//   Prasanna: 85,
//   Ravi: 70,
//   Meena: 40,
//   Ankit: 90
// };


// let count = {};

// for (const key in students) {
//     if(students[key] >= 75){
//         count[key] = students[key];
//     }
// };

// console.log(count);



// Q.2) 

// const data = { a: 2, b: 3, c: 6, d: 7 };
// const even = {};
// for (const key in data) {
//     if(data[key] % 2 === 0){
//          even[key] = data[key];
//     }
// }

// console.log(even);




// Q.3) 
// const person = { name: "Prasanna", age: 22 };
// const dynamicKey = "lengthOfValue"

// for (const key in person) {
//     if(typeof person[key] === "string"){
//       person[dynamicKey] = person[key].length;
//     }
// }
//console.log(person);




// LEVEL- 2 -> Loop + Object in Real Scenarios

// Q.4) 

// const products = [
//   { name: 'Apple', category: 'fruit' },
//   { name: 'Tomato', category: 'vegetable' },
//   { name: 'Banana', category: 'fruit' },
//   { name: 'Potato', category: 'vegetable' }
// ];

// let grouped = {};
// for (const el of products) {
//      if(!grouped[el.category]){
//       grouped[el.category] = [];
//      }
//      grouped[el.category].push(el.name);
// }

// console.log(grouped);





// Q.5) Count words in a sentence
// const sentence = 'I love coding because coding is fun';
// let sent = {};
// for (const el of sentence.split(' ')) {
//    if(!sent[el]){
//     sent[el] = 1;
//    }
//    else{
//     sent[el]++;
//    }

// }

// console.log(sent);




// Q.6) 
// const users = {
//   u1: { name: 'Prasanna', age: 21 },
//   u2: { name: 'Ravi', age: 22 },
//   u3: { name: 'Meena', age: 20 },
// };

// for (const obj in users) {
//   users[obj].age =  users[obj].age + 1;
// }

// console.log(users);



// -------###  LEVEL 3 — Tricky & Edge Cases  ###### --------


//Q.7) Dynamic key matching
// const user =
//  { firstName: 'Prasanna', lastName: 'Kumar', city: 'Damanjodi' };
// const search = 'city';

// // ❓ Log the value using the `search` variable (not hard-coded)

// console.log(user[search]);





// Q.8) Remove keys with falsy values
// const obj = { a: 0, b: 1, c: '', d: null, e: 2 };
// const truthyObj = {};

// for (const key in obj) {
//   if (obj[key]) {
//     truthyObj[key] = obj[key];
//   }
// }

// console.log(truthyObj);



// Q.9)
// const cart = {
//   item1: { price: 100, qty: 2 },
//   item2: { price: 50, qty: 3 },
//   item3: { price: 120, qty: 1 }
// };

// let total = 0;
// for (const obj in cart) {
//      total = total + cart[obj].price * cart[obj].qty;
// }
// console.log(total);



//Q.10) Reverse key-value pairs
// const colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };

// // ❓ Create new object with swapped key-value pairs
// // Expected: { "#FF0000": "red", "#00FF00": "green", "#0000FF": "blue" }
// const reverse = {};

// for (const key in colors) {
//    const value = colors[key];
//    reverse[value] = key
// }

// console.log(reverse);




//Q.17) BONUS
// const marks = { a: 70, b: 85, c: 90, d: 40 };

// let max = marks.a;
// for (const key in marks) {
//  if(marks[key] > max){ // 85 > 70 
//   max = marks[key];
//  }
// }
// console.log(max);



// Q.18)  Merge two Objects
// way - 1 -> Object.assign({}, obj1, obj2)
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// console.log({...obj2,...obj1})


// Q.19) 
// const user = {
//   profile: { name: 'Prasanna', address: { city: 'Damanjodi' } }
// };
// let cityVal = '';

// for (const key in user) {
//   if(!user[key].address.city){
//      cityVal = "Not Found";
//   }
//   else{
//     cityVal = user[key].address.city
//   }
 
// }

// console.log(cityVal);





// Q.20)
// const users = { a: 10, b: 20, c: 30, d: 40 };
// let newObj = {};

// for (const key in users) {
//     if(users[key] > 25){
//       newObj[key] = users[key];
//     }  
// }
// console.log(newObj);



// Q.21) 
// const votes = { a: 3, b: 7, c: 2, d: 7 };
// let max= votes.a;
// let win = {};
// for (const key in votes) {
//   if(votes[key] > max){
//     max = votes[key];
//     win[key] = key
//   }
  
// }
// console.log(win);




// Q.22)
// const students = {
//   raj: { marks: 75, grade: 'B' },
//   simran: { marks: 90, grade: 'A' },
//   ajay: { marks: 65, grade: 'C' }
// };

// let high = [];

// for (const key in students) {
//   if(students[key].marks >= 80 || students[key].grade === "A"){
//     high.push(key);
//   }
// }
// console.log(high);




// Q.23) 
// const mixed = { a: 1, b: '2', c: 3, d: '4' };
// const intVal = {};

// for (const key in mixed) {
//     if(typeof mixed[key] === "number"){
//       intVal[key] = mixed[key];
//     }
// }

// console.log(intVal)




// q.24)

const employees = [
  { name: 'Alice', department: 'HR', role: 'Manager' },
  { name: 'Bob', department: 'IT', role: 'Developer' },
  { name: 'Charlie', department: 'HR', role: 'Recruiter' },
  { name: 'Dave', department: 'IT', role: 'Developer' },
  { name: 'Eve', department: 'HR', role: 'Manager' }
];


let grouped = {};

for (const key in employees) {
    const employee = employees[key];
    const {name, department, role} = employee;
    if(!grouped[department]){
        grouped[department] = {};
    }

    if(!grouped[department][role]){
        grouped[department][role] = [];
    }

    grouped[department][role].push(name)
};

console.log(grouped);




//Q.25) 
// const transactions = [
//   { user: 'Alice', amount: 100 },
//   { user: 'Bob', amount: 50 },
//   { user: 'Alice', amount: 200 },
//   { user: 'Charlie', amount: 300 },
//   { user: 'Bob', amount: 25 }
// ];

// const grouped = {};

// for (const key in transactions) {

//     const emp = transactions[key];
//     const {user, amount} = emp;

//     if(!grouped[user]){
//         grouped[user] = 0;
//     }
//     grouped[user] += amount;
// }


// console.log(grouped);




// Q.26) 

// const books = [
//   { title: 'Book A', genres: ['Fiction', 'Mystery'] },
//   { title: 'Book B', genres: ['Mystery', 'Thriller'] },
//   { title: 'Book C', genres: ['Fiction', 'Fantasy'] },
//   { title: 'Book D', genres: ['Thriller'] }
// ];

// let groupedGenre = {};

// for (const book of books) {
//     for (const genre of book.genres) {
//         if(!groupedGenre[genre]){
//             groupedGenre[genre] = [];
//         }
//         groupedGenre[genre].push(book.title)
//     }
// }

// console.log(groupedGenre);





// Q.27)
// const items = [
//   { id: 1, value: 'apple' },
//   { id: 2, value: 'banana' },
//   { id: 3, value: 'apple' },
//   { id: 4, value: 'orange' },
//   { id: 5, value: 'banana' }
// ];

// let grouped = {};

// for (const key of items) {
//     if(!grouped[key.value]){
//         grouped[key.value] = [];
//     }

//     grouped[key.value].push(key.id);
// }

// console.log(grouped);



