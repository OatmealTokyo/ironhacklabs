//OR Operator
expr1 || expr2

true  || true 		// => true
true  || false 		// => true
false || true 		// => true
false || false 		// => false
false || (4 > 2) 	// true


// AND OPERATOR
expr1 && expr2

true  && true       // => true
true  && false      // => false
false && true       // => false
false && false      // => false
true  && (4 > 2)    // => true

//NOT OPERATOR
!expr1

!true 		// => false
!false 		// => true
!(4 > 2) 	// => false

//Conditional Statememts
if (condition) {
  // code to execute if the condition is true
}

if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}

if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if condition1 and condition2 are false
}

var age = parseInt(prompt("Welcome to IronHack cinema. How old are you?"));

if (age <= 16) {
  console.log ("You have a teenager discount");
} else if (age >= 65) {
  console.log ("You have the senior citizen discount :)");
} else {
  console.log ("Sorry, you have no discount :(");
}

if (condition) {
  if (nestedCondition) {
    // The code will be executed if
    // condition === true && nestedCondition === true
  } else {
    // The code will be executed if
    // condition === true && nestedCondition === false
  }
} else {
  // The code will be executed if
  // condition === false
}

var number1 = parseInt (prompt ("First number:"));
var number2 = parseInt (prompt ("Second number:"));

if (number1 === number2) {
  console.log ("The numbers are equal");
} else {
  if (number1 > number2) {
    console.log("Number 1 is bigger than number 2");
  } else {
    console.log("Number 1 is smaller than number 2");
  }
}

var messageLanguage = prompt("Which language do you prefer?  Spanish? French?");

if (messageLanguage === "Spanish") {
    alert("Hola, mundo!")
} else if (messageLanguage === "French") {
    alert("Bonjour tout le monde");
} else {
    alert("Hello, world");
}

//Too many conditions

var name  = prompt ("Favorite Game of Thrones main character:");
var house = "";

if (name === "Khal Drogo") {
  house = "Dothraki Horselord";
} else if (name === "Daenerys") {
  house = "Targaryen";
} else if (name === "Jon Snow" || name === "Sansa" || name === "Arya") {
  house = "Stark";
} else if (name === "Cersei" || name === "Tyrion" || name === "Ser Jaime") {
  house = "Lannister";
} else {
  house = "Other";
}

console.log("Your favorite character is from the house " + house);

//Using switch to make it easier
switch (expression) {
  case value1:
    // executed code when the expression === value1
    break;
  case value2:
    // executed code when the expression === value2
    break;
  case value3:
    // executed code when the expression === value3
    break;
  default:
    // executed code when none of the values match the expression
}

var name  = prompt ("Favorite Game of Thrones main character:");
var house = "";

switch (name) {
  case "Khal Drogo":
    house = "Dothraki Horselord";
    break;
  case "Daenerys":
    house = "Targaryen";
    break;
  case "Jon Snow":
  case "Sansa":
  case "Arya"
    house = "Stark";
    break;
  default:
    house = "other";
}

console.log("Your favorite character is from the house " + house);

//Loops & Iterations
while (condition) {
  // code to be executed while the condition is true
}

var i = 0;

while (i <= 100) {
  console.log (i);
  i = i + 1;  // this is the same as i++
}

var i = 0;

while (i < 30) {
  console.log (i);
  i = i + 1;  // this is the same as i++
}

var result;
for (i = 0; i <=30; i++) {
    if (i == 10) {
      result = "Ten";
    } else if (i == 20) {
      result = "Twenty";
    } else if (i ==30) {
      result = "Thirty";
    } else {
      result = i;
  }
  console.log(result);
}

var result;
for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      result = i + " is Even";
    } else {
      result = i + " is Odd";
    }
    console.log(result);
}