var element = document.getElementById("cat");
=> undefined

element.innerHTML = "I'm a cat";

var element = document.getElementById("cat");
=> undefined

element.style.backgroundColor = "red";
element.style.border = "2px green solid";



// Get the h1 element and change the content to "My tasks list"
document.getElementsByTagName("h1").innerHTML = "My Task list";

var h1 = document.getElementsByTagName("h1";
h1.innerHTML = "My Tag List");

// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// Changes the color of the background using STYLE
function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

// Run this function every 300ms
setInterval(changeBackgroundColor, 300);

element.style.backgroundColor = "red";
element.style.border = "2px green solid";

element.style.color = "#ff3300";
element.style.marginTop = "30px";
element.style.paddingBottom = "30px";

// get the class name of "element"
var cName = element.className;

// set the class name of "otherElement"
otherElement.className = cName;

// get the id of "element"
var idStr = element.id;

// set the id of "otherElement"
otherElement.id = "some-value";

var elements = document.getElementsByClassName(names);

var mice = document.getElementsByClassName('mouse');

var elements = document.getElementsByTagName(name);

var divs = document.getElementsByTagName('div');

document.querySelector(selectors);

var firstMouse = document.querySelector('.mouse');

var elementList = document.querySelectorAll(selectors);

var matches = document.querySelectorAll(".mouse, #cat");

