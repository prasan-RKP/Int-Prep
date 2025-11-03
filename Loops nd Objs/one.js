// Q.1) 
// let employees = [
//   { name: "Alice", department: "Engineering", role: "Developer" },
//   { name: "Bob", department: "Engineering", role: "Tester" },
//   { name: "Charlie", department: "HR", role: "Recruiter" }
// ] ;


//  let grouped = {};

// for (const key of employees) {
//    if(!grouped[key.department]){
//      grouped[key.department] = {};
//    }
//    if(!grouped[key.department][key.role]){
//        grouped[key.department][key.role] = [];
//    }

//   // if(!grouped[key.department][key.role])
//   grouped[key.department][key.role].push(key);
// }

// console.log(grouped);



// Q.2) 
let emp = [
  { name: "iPhone", category: "Electronics", brand: "Apple" },
  { name: "Galaxy", category: "Electronics", brand: "Samsung" },
  { name: "MacBook", category: "Electronics", brand: "Apple" },
  { name: "T-shirt", category: "Clothing", brand: "Nike" }
]

let grouped = {};

//problem -> 1
// for (const key of emp) {
//   if(!grouped[key.category]){
//     grouped[key.category] = {};
//   }

//   if(!grouped[key.category][key.brand]){
//     grouped[key.category][key.brand] = [];
//   }

//   grouped[key.category][key.brand].push({name: key.name});
// }

// console.log(grouped);





/// Q.4) 

// let names = 
// [
//   { name: "Alice", team: "A", level: "Senior" },
//   { name: "John", team: "A", level: "Senior" },
//   { name: "Bob", team: "A", level: "Junior" },
//   { name: "Charlie", team: "B", level: "Junior" }
// ];
// let myGroup = {};

// for (const key of names) {
//     if(!myGroup[key.team]){
//       myGroup[key.team] = {}
//     }

//    if(!myGroup[key.team][key.level]){
//     myGroup[key.team][key.level] = 0;
//    } 

//    myGroup[key.team][key.level] ++;
// }
// console.log(myGroup);
