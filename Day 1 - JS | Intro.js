-- JS | Intro

console.log("My name is Bob, and I'm writing JavaScript");

var favoriteFood;
console.log(favoriteFood);

var favoriteFood;

favoriteFood = "Steak";
console.log(favoriteFood);

favoriteFood = "Pizza";
console.log(favoriteFood);

var myValue = "This is a string";
console.log(myValue);

myValue = 2;
console.log(myValue);

console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);

// 4 / 2 = 2
console.log(4 / 2);
//With a remainder of 0
console.log(4 % 2);

// 7 / 2 = 3.5
console.log(7 / 2);
//With a remainder of 1
console.log(7 % 2);

// If a number modulus other number is equal to 0
// it is a multiple of "other number"

// 8 is indeed a multiple of 2!
console.log(8 % 2 === 0);
// 9 is NOT a multiple of 2!
console.log(9 % 2 === 0);

var myAge = 25;

myAge += 1;
console.log(myAge);

var expressionOne = ((2 * 2) + 5) * 6;
// console.log(expressionOne);

var expressionTwo = ((2* 2) + (5 * 3)) - 5;
// console.log(expressionTwo);

var expressionThree = (5 * 5) / (5 * 5);
// console.log(expressionThree);

var expressionFour = 5 * 5 - 5 * 4;
// console.log(expressionFour);

var country = "USA";
console.log(country);

var otherCountry = "Spain";
console.log(otherCountry);

var name = "Ironhacker";
console.log(name);

var username = "ironhack123";
console.log(username);

var superSecretPassword = "pa$$w0rd_";
console.log(superSecretPassword);

// Give this a run to see the result
// The \n is called a newline character
var multiLineString = 'This is on the first line.\nThis is on the second';
console.log(multiLineString);
multiLineString = "This is on the first line.\nThis is on the second";
console.log(multiLineString);


// If we don't use these backslashes to *escape* the quotes
// it will end my string early.
var escapedBecauseItHasQuotes = "Yeah, the lobster meat is \"real\"";
console.log(escapedBecauseItHasQuotes);

var emptyContainer = "";
emptyContainer += "Hello student";
// += is equivalent to saying:
// emptyContainer = emptyContainer + "Hello student";
console.log(emptyContainer);

// ERROR CASE
emptyContainer + "Hi there!";
// The value is still "Hello student", because we didn't reassign the variable value with `+=`
console.log(emptyContainer);

var greeting = "Hello";
console.log(greeting[0]);
console.log(greeting[3]);
console.log(greeting[9]);
console.log(greeting[-2]);

var favoritePhrase = "Don't be evil";

console.log(favoritePhrase.indexOf("Don't"));

console.log(favoritePhrase.indexOf("e"));
// This is 7 because indexOf prints the FIRST occurance

console.log(favoritePhrase.indexOf("z"));
// It's not found so the index is -1

console.log("$".repeat(3));

console.log("la".repeat(10));

console.log("dog".includes("og"));
console.log("Dog".includes("do"));
console.log("Hippopotamus".includes("pop"));
// We can pass an optional second argument to tell includes where to start
console.log("Hippopotamus".includes("Hip", 1));