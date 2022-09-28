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
//----static methods

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
// static method
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();
Person.hey();
//jonas.hey()//is not a function
// static method
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
//. ES6 Classes
// class PersonCL {}
//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    //this will be put into the prototype
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //setting a property that already exists
  set fullName(name) {
    //adding the _ avoids conflict with fullName
    if (name.includes(' ')) this._fullName = name;
    else alert(`{name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
  // static method
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();
console.log(jessica.age);
//1. classes are not hoisted
//2. classes are first-class citizens
//3. classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// static method
PersonCl.hey;
// static method
// es6 classes
//!========
//-----getters and setters es6 classes
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
//-----getters and setters
//!========
//-----static methods
// completed
//-----static methods
//!========
// Object.create
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// A object created using the create method inherits the properties that you set it to
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
//object.create creates a new object with steven
//steven will inherit the properties of PersonProto
const steven = Object.create(PersonProto); //steve empty object connected to person proto
console.log(steven);
steven.name = 'Steven'; //name is a property set on "steven",but not on Person
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979); //using the init function to get
sarah.calcAge();
//----object.create
//!=========
//----coding challenge #2
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  };
  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  };
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50; //50 * 1.6 = 80 ki/h
console.log(ford);
//getters => access properties
//setters => change mutate them

//-----coding challenge #2
//!==========
//------inheritance between classes
//inheritance in constructor functions
//
const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
//same data as person

//don't violate the DRY principle
const Student = function (firstName, birthYear, course) {
  //  using call method to call the this
  Person1.call(this, firstName, birthYear); //get the first the name and birth year from the person1 by using the call method
  this.course = course;
};

// Linking prototypes
//creates an empty object so order is important
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
/*creating a new student
with the name of Mike
birthYear of 2020
course of Computer science
*/
const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
mike.introduce(); //calling the introduce function
mike.calcAge(); //expected output 17

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); //mike exists as a student
console.log(mike instanceof Person1); //mike also exists as a person1
console.log(mike instanceof Object); // is a instanceof Object

Student.prototype.constructor = Student; //fixing the prototype pointing to person
console.dir(Student.prototype.constructor);

//------inheritance between classes
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
const Car3 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car3.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car3.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car3.call(this, make, speed);
  this.charge = charge;
};

//link the prototypes
EV.prototype = Object.create(Car3.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate(); //the first method that the prototype chain sees if there are duplicates the first one it sees will be used instead of going to the parent
// end coding challenge #3
//!=========
//------inheritance between classes using es6 classes
//es6 classes are basically constructor functions but with a modern syntax

//static method
class PersonCl2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    //this will be put into the prototype
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //setting a property that already exists
  set fullName(name) {
    //adding the _ avoids conflict with fullName
    if (name.includes(' ')) this._fullName = name;
    else alert(`{name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log('Hey there 👋');
  }
  // static method
}
class studentCl extends PersonCl2 {
  constructor(fullName, birthYear, course) {
    //always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new studentCl('Martha Jones', 2012, 'Computer science');
martha.introduce();
martha.calcAge();
//-------end inheritance between classes es6
//!=================
