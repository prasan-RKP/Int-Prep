// Classes in JS

// -> Class is a program-code template for creating objects.
//-> Those objects will have some states(varibales) & some behaviour (functions) inside it.

// here 'MyClass' is acting as blueprint of other objects like every objects can use 'MyClass' as a blueprint and can extra things.

//Example - 1
class MyClass {
  constructor() {}
  myClass() {}
}

let myObj = new MyClass();

// Example-2
class ToyotaCar {
  constructor(like) {
    console.log("It is resumed...", like);
  }

  start() {
    console.log("Starting....");
  }

  stop() {
    console.log("Stopping....");
  }

  setBrand(brand) {
    this.brandName = brand;
  }
}

let ftr = new ToyotaCar("FavCAr");
ftr.setBrand("hvfhdv");
let lexus = new ToyotaCar();

// --------## CONSTRUCTOR ##---------

// 'constructor'() -> is automatically invoked by 'new' keyword.
// initializes object
// in JS if you create a class,  it automatically created a 'constructor' method insid ethe 'class'.
// Constructor having the same name of the particular class.

// whenever we will write "let ftr = new ToyotaCar();" ->  It will show/call firstly which is inside the 'constructor'

class Animal {
  constructor(name) {
    this.name = name;
  }

  healthyAnimal() {
    console.log("We are Healthy animals", this.name);
  }

  normalWeightAnimal() {
    console.log("These are normal weight aniimal");
  }

  looseWeightAnimal() {
    console.log("These are loose-weight animal");
  }
}

class Birds extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  highSky() {
    console.log("We are HIgh-sky bird");
  }

  lowSky() {
    console.log("Low-sky bird", this.name);
  }
}

let myBirds = new Birds("Pea");


myBirds.healthyAnimal();

