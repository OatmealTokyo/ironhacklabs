var hacker1 = prompt("What is the name of the driver?");
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is the name of the Navigator?");
console.log("The driver's name is " + hacker2);

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}   else if (hacker2.length > hacker1.length) {
        console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
}   else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters");
}

var hacker1 = "John";
var nameUpper = hacker1.toUpperCase();
var spaceName = ""

for (i = 0; i <= nameUpper.length; i++) {
    spaceName += nameUpper.charAt(i) + " ";
}
console.log(spaceName);

var name = "John";

function reverse(name) {
    return name.split('').reverse().join('');
}
console.log(reverse(name));

/* Depending on the lexicographic order of the strings, print:  */
/* The driver's name goes first  */
/* Yo, the navigator goes first definitely */
/* What?! You both got the same name? */

var hacker1 = "Steve";

var hacker2 = prompt("What is the navigator's name?");

if (hacker1.charAt(0) > hacker2.charAt(0)) {
    console.log("The driver's name goes first");
} else if (hacker2.charAt(0) > hacker1.charAt(0)) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both got the same first letter in your name?");
}

/* Ask the user for a new string and check if it's a Palindrome. Examples of palindromes: */

var word = prompt("Check Palindrome. Enter text");

function checkPalindrome(word) {    
    var len = word.length;
    for (var i = 0; i < (len / 2); i++) {
        if (word.charAt(i) !== word.charAt(len - 1 - i))
             return false;
    }
    return true;
}

