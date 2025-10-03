//Q.1) You are creating a website foryour college. Create a class 'User' with 2 properties 'name & email' . it also has a method called 'viewData' that allows user  to view website data.

// class User{
//     constructor(name, email){
//       this.name = name;
//       this.email = email;
//     }

//     viewData(){
//          console.log(`Hey my college name is ${this.name} and my email is ${this.email}`);
//     }
// }

// let data = new User("S.A.P.S.K", "pk452@");
// data.viewData();

// class Admin extends User{

//     editData(){
//       let  DATA = "Some new Value";
//       return DATA;
//     }
// }

// let adm = new Admin();
// adm.name = "cnvjdb";
// console.log(adm.name)
// console.log(adm.editData());

// ---------- Let's Deeply Practice --------

// Level -1 (Basic Question with recall)

//Q.1) Create a class Car with properties brand and year.Create an object of Car and print its details.

// class Car {
//     constructor(brand, year){
//         this.brand = brand;
//         this.year = year;
//     }
// }

// let obj1 = new Car("TOYOTA", "2004");
// console.log(obj1.brand, "->", obj1.year);

// Q.2)Make a class Rectangle with methods to calculate area and perimeter.Create two objects with different lengths & breadths, and print their results.

// class Reactangle{
//     constructor(l, b){
//         this.l = l;
//         this.b = b;
//     }

//     area(){
//         return `The area of Rectangle is ${this.l * this.b}`;
//     }

//     perimeter(){
//         return `The Perimeter of rectangle is ${2*(this.l + this.b)}`
//     }
// }

// let obj2 = new Reactangle(4, 5);
// let obj3 = new Reactangle(2, 3);

// console.log(`The Area of obj2 is ${obj2.area()} & the Perimeter is ${obj2.perimeter()}`);

// console.log(`The Area of obj2 is ${obj3.area()} & the Perimeter is ${obj3.perimeter()}`);

//#################

// ------- Level-2 -> Inheritance (super keyword basics)

//#####################

// Q.1) Create a Person class with name and age.Create a Student class that extends Person and adds rollNo.Use super() inside Student to call the Person constructor.Make an object of Student and print all details.

// class Person1 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello(){
//     return "Hello";
//   }
// }

// class Student1 extends Person1 {
//   constructor(rollNo) {
//     super();
//     this.rollNo = rollNo;
//   }
// }

// let std = new Student1(32);

// std.age = 12;
// std.name = "Samar";

// console.log(`Hey my name is ${std.name}, having rollNo:${std.rollNo} with ${std.age} years old`);

// Q.2) Create a class Animal with a method makeSound(). Create a Dog class that extends Animal. Override makeSound() in Dog but also call parent’s method using super.makeSound().

// class Animal{
//     makeSound() {
//         return "Nothing for Now";
//     }
// }

// class Dog extends Animal{
//     makeSound(){
//      super.makeSound();
//     }

// }

// -------- Level-3 (depeer use of super) -------

//Q.1)Create a class Shape with a method area(). Create a Circle class that extends Shape. Use super.area() (though it gives default value) and add logic for circle’s area.

// class Shape{
//     constructor(){
//         return "Hello";
//     }
//     area(){
//         return 0;
//     }

// }

// class Circle extends Shape{
//     constructor(radius){
//         super();
//         this.radius = radius;
//     }

//     area(){
//         super.area();
//         return `The Area of circle is ${2.141 * this.radius * this.radius}`;
//     }
// }

// let obj1 = new Circle(5);
// console.log(obj1.area());

// Q.2) Create a class Employee with name and salary.Create a Manager class that extends Employee and adds department. n Manager, override displayInfo() but still print name and salary using super.displayInfo().

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }

//   displayInfo() {
//     return `The Employe's name is:${this.name} & salary is:${this.salary}`;
//   }
// }

// class Manager extends Employee {
//   constructor(name, salary, department) {
//     super(name, salary);
//     this.department = department;
//   }

//   displayInfo() {
//     super.displayInfo();
//     return `The Mangers's name is${this.name} & salary is ${this.salary} & department is ${this.department}`;
//   }
// }


// let obj1 = new Manager("Ravi", 45000, "MECHANICAL");

// console.log(obj1.displayInfo());





// ------------- Level 4 – Mixed challenge-----------



// Q.3) Create a Vehicle class with speed and fuel.Create a Car class that extends Vehicle.Add a method in Car that prints both parent properties (using super) and its own property seats.


// class Vehicle {
//     constructor(speed, fuel){
//         this.speed = speed;
//         this.fuel = fuel;
//     }

// }

// class Car extends Vehicle{
//     constructor(speed, fuel, seats){
//         super(speed, fuel);
//         this.seats = seats;
//     }

//     showCarDetail(){
//         return `The car detail -> speed:${this.speed}, fuel:${this.fuel}, seats:${this.seats}`;
//     }
// }

// let obj1 = new Car('80km/h', '50/L', 2500);

// console.log(obj1.showCarDetail());





// Q.4) Create a BankAccount class with accountNumber and balance.Create a SavingsAccount class with interestRate.Write a method to calculate yearly interest.Call parent constructor using super().



// class BankAccount {
//     constructor(accountNumber, balance){
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
// }


// class SavingsAccount {
//     constructor(accountNumber,balance,interestRate){
//         super(accountNumber, balance);
//         this.interestRate = interestRate;
//     }

//     yearlyInterest(){
//          return 
//     }
// }