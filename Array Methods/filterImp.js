// Q.1)
// const words = ["level", "world", "radar", "javascript", "madam"];
// // Keep only palindromes
// // Output: ["level", "radar", "madam"]

// const all = words.filter((word)=> {
//     return word === word.split('').reverse().join('');
// })
// console.log(all);

// Q.2) Filter Unique Length Words

// Keep only words whose length is prime
// Prime lengths = 2, 3, 5, 7...
// Output: ["cat", "dog", "bird", "goat"]

// const words = ["cat", "dog", "bird", "fish", "goat"];

// const all = words.filter((word) => {
//   let len = word.length;

//   if (len < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(len); i++) {
//     if (len % i === 0) {
//       return false;
//     }
//   }
//   return true;
// });

// console.log(all);





// Q.3) Filter Strings with Digits
//// Output: ["abc123", "42world"]
// const nums = ["abc123", "hello", "42world", "test"];
// let myNums = [1,2,3,4,5,6,7,8,9,0];
// const all = nums.filter((num)=> {
//   for (const mynum of myNums) {
//        if(num.includes(mynum)){
//         return true;
//        }
//   }

//   return false;
// });
//console.log(all);



// Q.4) Filter Anagrams of a Word
// const words = ["listen", "silent", "enlist", "google", "tinsel"];
// const baseWord = "listen";
// // Output: ["silent", "enlist", "tinsel"]
// const anagrams = words.filter((word)=> {
//  if(baseWord.split('').sort().join('') === word) return false;
//  return  baseWord.split('').sort().join('') === word.split('').sort().join('');
// })

// console.log(anagrams);




// Q.5) Filter Emails Without Valid Domain

// const emails = ["alice@gmail.com", "bob@", "carol.yahoo.com", "dave@hotmail.com"];
// // Output: ["alice@gmail.com", "dave@hotmail.com"]
// const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// const email = emails.filter((em)=> {
//     if(format.test(em)) return true;
//     else  return false;
// })

// console.log(email);
