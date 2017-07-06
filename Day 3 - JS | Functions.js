// Function Declaration
function sayHelloWorld() {
  var whatToSay = 'Hello, World!';
  console.log(whatToSay);
}

// Function Invocation
sayHelloWorld(); // => Hello, World!

//function <name> ([<argument_list>]) {
 // <instructions>

  //[return <expression>];
//}


function sayHello(name) {
  console.log('Hello ' + name + '!');
}

// Arguments

sayHello('Mery');
// name = Mery
// function will alert: "Hello Mery!"

sayHello('John');
// name = John
// function will alert: "Hello John!"

sayHello('Lucy');
// name = Lucy
// function will alert: "Hello Lucy!"

// Argument

function sayHello(name) {
  console.log('Hello ' + name + '!');
}

sayHello('Mery');
// name = Mery
// function will alert: "Hello Mery!"

sayHello('John');
// name = John
// function will alert: "Hello John!"

sayHello('Lucy');
// name = Lucy
// function will alert: "Hello Lucy!"

// Parameter: the variable which is part of the method’s signature (method declaration).
// Argument is an expression used when calling the method.

function sayHelloManyTimes(name, howManyTimes) {
  for (var i=0; i < howManyTimes; i++) {
    console.log('Hello ' + name + '!');
  }
}

sayHelloManyTimes('Michael', 3);
// => Michael, Michael, Michael

sayHelloManyTimes(3, 'ERROR');
// Will this work? NO

sayHelloManyTimes(2);
// Will this work? No

sayHelloManyTimes('ironBrain');
// Will this work? NO

// A Javascript function always returns something.
// When a returning value is not specified, the function returns undefined.

var roundDown1 = Math.floor(4.2);       // roundDown1 === 4
var roundDown2 = Math.floor(10.7) + 5;  // roundDown2 === 10+5 === 15
console.log(Math.floor(5 + 0.49))       // This will print 5

var zeroToOne = Math.random();   // Random integer number [0,1]

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function gradeTheStudent () {
  var grades = ['Master', 'Good', 'Acceptable', 'Average', 'Poor', 'Fail'];

  var randomNumber = Math.random();            // Random decimal [0.0 - 1.0)
  randomNumber = randomNumber * grades.length; // Random decimal [0.0 - 6.0)
  randomNumber = Math.floor(randomNumber);     // Random integer [0   - 5]

  return grades[randomNumber];
}

var myGrade = gradeTheStudent();
console.log(myGrade);P

// Anonymous Function
var anon = function(){
  console.log("An0nym0us Funct10n");
}

anon();
// An0nym0us Funct10n

// Anonymous functions can be used as a parameter passed to another function.
function doSomethingWithAFunction(name, functionToCall){
  functionToCall(name);
}
                                       // Anonymous Function
doSomethingWithAFunction("Ironhacker", function(someParameter){
  console.log("Hello " + someParameter);
});
// => Hello Ironhacker
                                       // Anonymous Function
doSomethingWithAFunction("Ironhacker", function(someParameter){
  console.log("Goodbye " + someParameter);
});
// => Goodbye Ironhacker

                            // Anonymous Function
doSomethingWithAFunction(2, function(someParameter){
  console.log(2 + someParameter);
});
// => 4

var ratings = [1, 3, 1, 1, 5, 4, 3, 2, 2, 2, 3, 3, 1, 1, 2, 4, 5, 1, 2];

for (var sum=0, i=0; i < ratings.length; i++) {
  sum += ratings[i];
}

var average = sum / ratings.length;

function avg(array) {
  for (var sum=0, i=0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

var ratingsShow1 = [1, 3, 1, 1, 5, 4, 3, 5, 5, 5, 3, 3, 1, 1, 2, 4, 4, 1, 2];
var ratingsShow2 = [2, 1, 4, 5, 3, 4, 2, 1, 3, 4, 3, 2];

console.log('The average rating of show1 is ' + avg(ratingsShow1));
console.log('The average rating of show2 is ' + avg(ratingsShow2));
console.log('The average rating of show3 is ' + avg([2, 3, 1, 3]));

// which show has the highest average of ratings? ratingShow1

// Formal VS Actual Parameters
// Now our function is written with function avg(array), 
// where array is placeholder instead of the specific rating values we gave it before.
// The placeholder names appearing in the argument list are called formal parameters.
// When we call the function, we pass it the actual parameters (in our example the ratingsShow1 variable).

function myFunction(formalParameter1, formalParameter2,...) {
  // ...
}

myFunction(actualParameter1, 2, 'another actual parameter');

// Functions Expression
// It will solve the expressions first before executing the function.
var ratings = [ avg([2,3,4]), avg([1,3,5]), avg([1,1,2,2]) ]
// ratings === [3, 3, 1.5]
avg(ratings);
// => 2.5

// Function with no return

function noReturn(){
  var foo = 'fighters';
  // what if... there is no return?
}

var bar = noReturn();
console.log(bar);
// undefined

var foo; // we declare foo but don't give it a value

if (foo === undefined) {
  console.log("yeah");
} else {
  console.log("naah");
}

// yeah or naah? :)
// yeah

// Function Return
function avg(array) {
  for (var sum=0, i=0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

console.log(avg([])); // what is the average value of no value at all? why?
// Divide by zero returns NaN (Not a Number)

function avg(array) {
  if (array.length === 0 ) {
    return;
  }

  for (var sum=0, i=0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

console.log(avg([]));

// Recursion

function factorial(number) {
  if (number === 0) { return 1; }
  return number * factorial(number - 1);
}

factorial(4);
// 4 * factorial(3)
// 4 * 3 * factorial(2)
// 4 * 3 * 2 * factorial(1)
// 4 * 3 * 2 * 1 * factorial(0)
// factorial of 0 is 1 :)
// 4 * 3 * 2 * 1 * 1
// 4 * 3 * 2 * 1
// 4 * 3 * 2
// 4 * 6
// => 24

// Variable scope.  Variable declared inside of a function is not accessible outside of that function.

function foo() {
  var myVariable = 'ironHack';
}

console.log(myVariable); // ReferenceError: myVariable is not defined

var aGlobal = 'Global';

function aFunction() {
  var aLocal = 'Local';
  console.log('AFUNCTION | aLocal:  ' + aLocal);

  aGlobal = 'new Global';
  console.log('AFUNCTION | aGlobal: ' + aGlobal);
}

console.log('PRE | aString: ' + aGlobal);
// PRE | aString: Global
console.log('PRE | aLocal:  ' + aLocal);
// ReferenceError

aFunction();
// AFUNCTION | aString: Local
// AFUNCTION | aLocal:  new Global

console.log('POST | aGlobal: ' + aGlobal);
// POST | aGlobal: new Global
console.log('POST | aLocal:  ' + aLocal);
// ReferenceError

//Function Programming

// First class function you can store in variables.

var add = function (a, b) {
  return a + b;
};

add(2, 3) // => 5

// High order functions you can return functions or receive other functions as parameters.

var add = function (a) {
  return function (b) {
    return a + b;
  };
};

var add2 = add(2);
add2(3);
// => 5

add(4)(5);
// => 9