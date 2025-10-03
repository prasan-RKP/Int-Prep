
// -------------  Inheritance JS ------------------

// defn ->Inheritance is passing down prperties & methods from parent class to child class.
// NOTE -> if child & parent have same method, child's method will be called/used (called as method Overriding).



// --------- Super() ----------
// -> The 'super' keyword is used to call the constructor of its parent class to access parent properties and methods.

// ########  IMP concept  #######
// TO Avoid the error -> Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor  -> 
// NOTE -> if we are calling child class constructor, make sure you have already called Preant class constructor through 'Super' keyword.

class Person {

    constructor(){
        this.species = "Homo sapiences";
    }

    eat(){
        console.log("I am Eating");
    }
}

class Enigineer extends Person{
    constructor(branch){
        super();  // to call invoke/call parent clasd contructor;
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("I am working on Bridge");
    }
}


class Doctor extends Person{
 treatMent(){
    console.log('Doing trearMent');
 }

 work(){
    console.log('Doctor is working now');
 }
}



let chotu = new Enigineer("CHEM");


