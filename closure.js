//Q.1) print 'name' using Closure

function greet() {
  return function (name) {
    return `Name is ${name}`;
  };
}

const ans = greet();

console.log(ans("Mozilla -> firefox"));

//Q.2)Counter

function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const inc = makeCounter() ;
console.log(inc());
console.log(inc());

// Q.3) Multiplier Factory

const multiplier = (factor) =>{

    return function(mul){
        return factor * mul;
    }
}

const mul5 = multiplier(5);

console.log(mul5(4));
console.log(mul5(2));

// Q.4) Limitted Counter

const makeLimitedCounter = (max) => {
    let count = 0;
    return {
        increment: function(){
           if(count < max){ // 2<5  6<5
            count ++;
           }
           return count;
          
        },

        decrement: function() {
           if(count > 0){
            count --;
           }
           return count;
        }
    }
}

const setMax = makeLimitedCounter(5);

console.log(setMax.increment());
console.log(setMax.increment());
console.log(setMax.increment());
console.log(setMax.decrement());
console.log(setMax.decrement());
console.log(setMax.decrement());
console.log(setMax.decrement());
console.log(setMax.decrement());
console.log(setMax.decrement());


// Q.5) Remember the previous input


const remember = () => {
    let store = null;
    return function(num){
        store = num;
        return `remembered: ${store}`;
    }

    
}

const app = remember();

console.log(app(12));
console.log(app(45));

// Q.6)


function memoize(fn) {

    const cache = {}; // private cache inside the closure

    return function(arg){
       if(cache[arg] !== undefined){
        return cache[arg]; // return cahed result
       }

       const result = fn(arg) // compute
       cache[arg] = result; // store in cache
       return result;
    };
};


const slowSqaure = (n) => {
    console.log("Calculating...");
    return n*n;
}

const fastSquare = memoize(slowSqaure);

console.log(fastSquare(5)); // "Calculating..." then 25
console.log(fastSquare(5)); // instantly 25 (no "Calculating...")


