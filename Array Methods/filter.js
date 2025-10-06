//Q.1) Filter Active Users

// const users = [
//   { name: "Alice", active: true },
//   { name: "Bob", active: false },
//   { name: "Charlie", active: true },
// ];

// const activeUser = users.filter((user)=> user.active);
// console.log(activeUser);

// Q.2) Remove falsy values
//  const values = [0, 1, false, 2, "", 3, null, undefined, "hello"];
//  const falsies = [
//     false, "", null, 0, undefined
//  ]

//  const all = values.filter((val)=> !falsies.includes(val));
//  console.log(all);

// Q.3) Search Filtering
// const products = ["Laptop", "Phone", "Tablet", "Desktop"];
// const search_query = "top"
// // Keep only items that contain "top" → Output: ["Laptop", "Desktop"]

// const filterItems = products.filter((prod)=> prod.includes(search_query));
// console.log(filterItems);

// Q.4) Filter by Range
// const ages = [12, 18, 24, 30, 15, 40];
// // Keep only ages between 18 and 30 (inclusive)
// // Output: [18, 24, 30]

// const filter = ages.filter((age)=> age >= 18 && age <= 30);
// console.log(filter);

// Q.5) Remove Duplicate Values
// const nums = [1, 2, 2, 3, 4, 4, 5];
// // Use filter to remove duplicates
// // Output: [1, 2, 3, 4, 5]
// console.log([...new Set(nums)]);

// Q.6) Filter by Nested Property
// let  people = [
//   { name: "Alice", address: { city: "NY" } },
//   { name: "Bob", address: { city: "LA" } },
//   { name: "Charlie", address: { city: "NY" } },
// ];

// const all = people.filter((peo)=> peo.address.city === "NY");
// console.log(all);


// Q.7) Filter Objects with Missing Data
// const data = [{ id: 1, name: "Alice" }, { id: 2 }, { id: 3, name: "Charlie" }];

// const names = data.filter((name)=> name.name);
// console.log(names)



// Q.8) Filter Based on Index
// const arr = ["a", "b", "c", "d", "e"];
// const oddIndex= arr.filter((od, idx)=> idx % 2 !== 0);
// console.log(oddIndex);



//Q.9) Filters by Email- Domain
// const emails = ["alice@gmail.com", "bob@yahoo.com", "carol@gmail.com"];
// // Keep only Gmail addresses
// // Output: ["alice@gmail.com", "carol@gmail.com"]

// const mails = emails.filter((ma)=> ma.includes('@gmail.com'));
// console.log(mails);



// Q.10) Filter Palinndromes
const words = ["level", "world", "radar", "javascript", "madam"];
// Keep only palindromes
// Output: ["level", "radar", "madam"]

// const sames = words.filter((word)=> {
//    let arr = word.split(' ');
//    let val = [];
//    for (let i = 0; i < arr.length; i++) {
//           if(arr[i] === arr[arr.length - i]){ 
//              val.push(arr[i]); 
//           }  
//    }

//    console.log(val);
// })

// console.log(sames)

let arr = words.map((word)=> {
  let myArr = word.split('');
     let val = ''
     let store = [];
     for (let i = 0; i < myArr.length; i++) {
        if(myArr[i] === myArr[myArr.length - 1- i]){
          val = val + myArr[i];
        }
        else{
          val = '';
          break; // not a palindrome break eatrly
        }
     }

     return val ? word : null;
     
})

arr = arr.filter(Boolean);
console.log(arr)