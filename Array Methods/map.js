// --------- Beginner Level----------
// Q.1)
// const nums = [2,4,6,8];
// let arr = nums.map((num)=> num * num)
// console.log(arr);

// Q.2)
// const fruits = ['apple', 'banana', 'mango', 'lychee'];
// const arr = fruits.map((fruit)=> fruit.toUpperCase());
// console.log(arr);

// Q.3)
// const words = ['hi', 'javascript', 'map'];
// const arr = words.map((word)=> word.length);
// console.log(arr)

//   ------------- Intermediate Level ---------

//Q.4) Extract proepr value

// const users = [
//     {name: "Alice", age: 20},
//     {name: "Bob", age: 25},
//     {name: "Charlie", age: 30}
// ];
// const arr = users.map((user)=> user.name);
// console.log(arr);

//Q.5) Add Something to Each Element
// const prices = [100, 200, 300];
// const val = prices.map((pr)=>{
//     let tax = pr * 0.1;
//     return pr + tax;
// });
// console.log(val);

// Q.6) Boolean Mapping
// const number = [3, 10, 15, 20];
// const val = number.map((num)=> num % 5 === 0);
// console.log(val)

// --------- Tricky/Edge Cases---------

//Q.7) IndexBased Mapping
// const arr = ["a", "b", "c"];
// const val = arr.map((ch, idx)=> {
//     return `${ch}-${idx}`
// });
// console.log(val);

//Q.8) Flatten Numbers in String Form
// const strNums = ["1", "2", "3", "4"];
// const arr = strNums.map((num)=> Number(num));
// console.log(arr);

// ----- Important ------

// ----------------- Real World style ----------

//Q.1)
// const apiData = [
//     {id: 1, firstName: "John", lastName: "Doe"},
//     {id: 2, firstName: "Jane", lastName: "Smith"}
// ]

// const myArr = apiData.map((ap)=> {
//    return `${ap.firstName} ${ap.lastName}`;

// });

// console.log(myArr);

//Q.2) Format User Data for Display

// const users = [
//     {firstName: "Alice", lastName: "Brown", age: 25},
//     {firstName: "Bob", lastName: "Smith", age: 30}
// ]

// // ans should be -> // Convert into: ["Alice Brown (25)", "Bob Smith (30)"]
// const ans = users.map((user)=> `${user.firstName} ${user.lastName} (${user.age})`);
// console.log(ans);

// Q.3) Mask Sensitive Information
/// Output: ["a***e@example.com", "b**b@gmail.com", "c***l@yahoo.com"]
// (Mask middle letters of username, keep domain as is)
const emails = ["alice@example.com", "bob@gmail.com", "carol@yahoo.com"];
const masks = emails.map((email) => {
  //step - 1
  const [user, domain] = email.split("@");

  // step - 2
  const hidden = user[0] + "*".repeat(user.length - 2) + user[user.length - 1];

  // step - 3
  return hidden + "@" + domain;

  // Elaborate 'step-2'  (taking example 'alice)

  //stpe - 1 -> user[0] -> 'a'
  // step - 2 -> "*".repeat(user.length - 2) -> "***"
  // step - 3  -> print lat character user[user.length - 1] = e
});
console.log(masks);


// Q.4) Add Extra Properties
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
// ];

// const ans = products.map((prod) => {
//   return { ...prod, inStcok: true };
// });
// console.log(ans);



// Q.5) Convert Nested Arrays to String

const tags = [["js", "es6"], ["react", "hooks"], ["node", "express"]];
// Output: ["js, es6", "react, hooks", "node, express"]

const ans = tags.map((tag)=> tag.join(", "))
console.log(ans);



// Q.6) Capitalize First Letter of Each Word

// const titles = ["hello world", "javascript is fun", "map method"];
// const values = titles.map((title)=> { 
//   return   title[0].toUpperCase() + title.slice(1);
// })



// Q.7) Map with Conditions + Index
// const nums = [10, 20, 30, 40];
// const all = nums.map((num, idx)=> idx % 2 === 0 ? num *2 : num * 3)
// console.log(all);



// Q.8) Flatten Object Values
// const people = [
//   { name: "Alice", hobbies: ["reading", "swimming"] },
//   { name: "Bob", hobbies: ["gaming"] }
// ];

// const all = people.map((peo)=> peo.hobbies);
// const allHobbies = all.flat();
// console.log(allHobbies)

 


//Q.9) Dynamic Key Transformation
// const apiResponse = [
//   { user_id: 1, user_name: "Alice" },
//   { user_id: 2, user_name: "Bob" }
// ]

// const all = apiResponse.map(({user_id, user_name})=> ({
//   userId: user_id,
//   userName: user_name
// }))

// console.log(all);



// Q.10) Transform to Lookup (id → name)
// const users = [
//   { id: 101, name: "Alice" },
//   { id: 102, name: "Bob" }
// ];
// // Expected Output: { 101: "Alice", 102: "Bob" }

// const all = Object.fromEntries(users.map(user => [user.id, user.name]));
// console.log([all]);



// Q.11) Chained Map Example
const data = ["10", "20", "30"];
const square = data.map((d)=> Number(d*d));
console.log(square);