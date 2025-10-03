
// ------ ProtoType in js ----

// -> A js object is an entity having state & behaviour.
// -> JS object have a special property called prototype.
// -> the prototype itself a object 
// We can set protype using __Proto__



// Creation 
const student = {
    fullname: "ABCD",
    marks: 60, 
    printMark: function() {console.log(this.marks)}  
}

//console.log(student);


let arr = [1,2,3];

// arr.concat();
// arr.fill();
// arr.filter();


// IMP -> concept (what is 'Prototype');

// Here The prototype see here '.concat', '.fill', '.filter' etc basically these all are coming from prototype object which is predefined in every object.



//use to -> Setting 'Prototype' 

const employee = {
    calcTax(){
        console.log("The tax rate is 10%");
    }
}


const Amul = {
    salary: 70000
}

const Rohan = {
    salary: 20000,
     calcTax(){
        console.log("The tax rate is 20%");
    }
}

const Rahas = {
    salary: 70000
}

const Reesu = {
    salary: 20000
}


Amul.__proto__ = employee; 
// By Doing this we can use 'employee' object via 'Amul'    
Rohan.__proto__ = employee;
Rahas.__proto__ = employee;
Reesu.__proto__ = employee;

console.log(Reesu);





