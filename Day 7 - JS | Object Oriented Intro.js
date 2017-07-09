// Problem solving
// Primitive expressions: which represent the simplest entities the language is concerned with
// Means of combination: by which compound elements are built from simpler ones
// Means of abstraction: by which compound elements can be named and manipulated as units

// Primitive Expressions:
// In JavaScript we have available six primitive data types to represent our data:

Boolean
Null
Undefined
Number
String
Object - which includes also Dates and Arrays

// Means of Combination
// Incrementally combine primitive data types to create more complex ones.

// A classroom contains the names of the students...
var classRoom = ["peter", "mary", "josh"];

var classRoom  = [
  {name: "peter", age: 23},
  {name: "mary",  age: 31},
  {name: "josh",  age: 12}
];

var classRoom  = {
  students: [
    {name: "peter", age: 23},
    {name: "mary",  age: 31},
    {name: "josh",  age: 12}
  ],
  teacher: "Ariel",
  subject: "Object-Oriented Course"
};

// Means of abstraction
// Abstraction, like composition, is a technique for arranging complexity of computer systems.

// It works by establishing a level of complexity through which a person interacts with the system,
// hiding the more complex details below the current level.

//Building Abstractions with Functions
//We can abstract the calculation of compoundInterest by creating a function. Thereafter we won’t have to remember the formula; We can abstract the complexity with a function.
//Building Abstractions with Data
//We can abstract a classRoom by creating a data structure that represents all the elements of a classRoom without having to worry about its internal structure.

// Encapsulation and Abstraction

// Encapsulation: To put all the data attributes of an object and its inner working (methods) inside of it.

// Abstraction: A way of arranging complexity where the more complex details are suppressed below the current level (hidden).

var object = {
  attributeName: value,
  methodName: function() { /* code lines */ }
}

var car = {
  name: 'Knight Industries Two Thousand',
  isOn: false,
  sayMyName: function() {
    console.log("My name is " + this.name);
  },
  start: function(){
    this.isOn = true;
  },
  stop: function(){
    this.isOn = false;
  }
}

car.sayMyName();
// => My name is Knight Industries Two Thousand

car.start();
// => now isOn === true

car.stop();
// => now isOn === false

// Construction Functions

function Name(param1, param2, ...){
  this.attribute = param1,
  this.method = function() { /* a*/  };
}

function Car(name){
  this.name = name;
  this.sayMyName = function() {
    console.log("This car's name is " + this.name);
  };
}

var kitt   = new Car("Knight Industries Two Thousand");
var modelS = new Car("Tesla Model S SuperCar");

kitt.sayMyName(); // => My name is Knight Industries Two Thousand
modelS.sayMyName(); // => My name is Tesla Model S SuperCar

Constructor functions start with a Capital Letter ie. Car vs car
It doesn’t return anything explicitly
Attributes are constructed as separated instructions (separated by ; not ,)

// This is used as a reference to an object

var kitt = {
  name: 'Knight Industries Two Thousand',
  sayMyName: function() {
    console.log("My name is " + this.name);
  }
};

var modelS = {
  name: 'Tesla Model S SuperCar',
  sayMyName: function() {
    console.log("My name is " + this.name);
  }
};

kitt.sayMyName();
modelS.sayMyName();

// Blackjack
function BlackjackGame () {
  this.total = 0;
  this.card  = 0;
  this.nextCard = function () {
    this.card = parseInt((Math.random()*13) + 1); // number between 1-13
    console.log("Next Card... " + this.card);
  };
  this.play = function(){
    this.nextCard();
    this.total += this.card;
    this.checkResult();
  };
  this.stand = function() {
    this.total = 0;
    console.log("Scared huh? Let's start again");
  };
  this.checkResult = function() {
    console.log("Total = " + this.total);
    if (this.total > 21) {
      console.log("You lose! Play Again?")
      this.total = 0;
    } else if (this.total == 21) {
      console.log("You Win!  Play Again?")
      this.total = 0;
    }
  };
}