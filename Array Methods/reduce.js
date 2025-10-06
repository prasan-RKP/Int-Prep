
// Q.1) Count Occurances of Elements

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // Output: { apple: 3, banana: 2, orange: 1 }

// const val = fruits.reduce((acc, fruit)=> {
//    acc[fruit] = (acc[fruit] || 0) + 1;
//    return acc;
// }, {})

// console.log(val);



// Q.2) Maximum value 
// const nums = [5, 17, 9, 21, 13];
// // Output: 21

// const val = nums.reduce((prev, curr)=> 
//     { return prev > curr ? prev : curr},0)

// console.log(val);



//Q.3)  Group by Property
// const people = [
//   { name: "Alice", city: "NY" },
//   { name: "Bob", city: "LA" },
//   { name: "Charlie", city: "NY" }
// ];

// const res = people.reduce((acc, person)=> {
//    if(!acc[person.city]){
//     acc[person.city] = [];
//    }

//    acc[person.city].push(person);

//    return acc;
// }, {})

// console.log(res);



// Q.4) Chained calculations(Average)
// const scores = [80, 90, 100];
// const res = scores.reduce((prev, curr)=>{
//    return prev + curr / scores.length
// }, 0)

// console.log(`The Score is ${res}`)




// Q.5) cFond the Longest words
// const words = ["cat", "elephant", "dog", "hippopotamus"];

// const longWord = words.reduce((prev, curr)=> {

//     return prev > curr.length ? prev : curr

// })
// console.log(longWord)


//Simulate Map + Filter with Reduce

const nums = [1, 2, 3, 4, 5, 6];
// Output: [4, 16, 36]

const res = nums.reduce((prev, curr)=>{
    if(curr % 2 === 0){
        prev.push(curr * curr); // 4
    }

}, 0)



