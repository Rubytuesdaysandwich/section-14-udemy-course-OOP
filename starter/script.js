'use strict';
//OOP object oriented programming
//Constructor Functions and the new Operator
//constructor functions should start with capital letters
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);

  //never do this//the object will be stuck carrying this function and upon each user creation a new method will be made as well.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1.New {} is created
//2.function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
//!========
//-----prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
//-----prototypes
//!========
//-----prototypal inheritance

//prototype chain
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); //Object.prototype//top of prototype chain
console.log(jonas.__proto__.__proto__.__proto__); //returns null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; //new Array === []
console.log(arr.__proto__); //inherit the prototype properties
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); //return only the unique values of the array
const h1 = document.querySelector('h1');
console.dir(x => x + 1);
//-----prototypal inheritance
//!========
//----- Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
//------end coding challenge 1#
//!=========
