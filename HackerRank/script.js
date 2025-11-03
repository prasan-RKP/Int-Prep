
// Q.1) Comapre Triplets

// function compareTriplet(arr1, arr2) {
//     // arr1[i] > arr2[i] -> arr1 = 1 & so on,
//     // arr2[i] > arr1[i] -> arr2  = 1 & so on,
//     let alice = 0;
//     let bob = 0;

//     if(arr1.length === arr2.length){
//         for(let i=0; i<arr1.length; i++) {
//             if(arr1[i] > arr2[i]){
//               alice ++;
//             }

//             if(arr2[i] > arr1[i]){
//                 bob ++;
//             }
//         }
//     };

//     console.log(`Alice:${alice} & BOb:${bob}`);
// }

// console.log(compareTriplet([17,28,30], [99,16,8]));



// Q.2)  calculate the absolute difference of a 2D array.

// let arr = [
//     [1,2,3],
//     [4,5, 6],
//     [9,8,9]
// ]


// let leftSum = 0;
// let rightSum = 0;

// for(let i=0; i<arr.length; i++){
//     leftSum += arr[i][i] // 1, 4, 6
//     rightSum += arr[i][arr.length - i- 1];
// }

// let val = Math.abs(leftSum - rightSum);
// console.log(val);




// Q.3) Plus , Minus 

function plusMinus(arr) {
   let countPlus = 0;
   let countMinus = 0;
   let countZero = 0;
   let length = arr.length;

   for(let i=0; i<arr.length; i++){
    if(arr[i] > 0){
        countPlus ++;
    }

    if(arr[i] < 0){
        countMinus ++;
    }

    if(arr[i] === 0){
        countZero ++;
    }
   }

   let avgP = countPlus / length;
   let avgM = countMinus / length;
   let avgZ = countZero / length;

   console.log(avgP.toFixed(6));
   console.log(avgM.toFixed(6));
   console.log(avgZ.toFixed(6));
}

let arr = [-4, 3, -9, 0, 4, 1]

console.log(plusMinus(arr));
