// Push used to put values at the end of the array.

var arrayNames = ["Pedro", "Jake", "Joan"];

arrayNames.push("Rachel");

console.log(arrayNames[3]);

// Unshift to add an element to the beginning of an array.

var arrayNames = ["Pedro", "Jake", "Joan"];

arrayNames.unshift("Rachel");

console.log(arrayNames[0]);
// => Rachel

// Splice to delete element in array.

var arrayNames = ["Pedro", "Jake", "Joan"];

console.log(arrayNames[0]);  // Pedro
arrayNames.splice(0,1);
console.log(arrayNames[0]);   // Jake

// push	Add an element at the end
// unshift	Add an element at the beginning
// shift	Remove the first element
// pop	Remove the last element
// splice	Removes elements from anywhere in the array

// forEach Function iterates all elements in an array

var arrayNames = ["Pedro", "Jake", "Joan"];

arrayNames.forEach(function(name){
  console.log(name);
})

[1,2,3,4].forEach(function(element){
  console.log(element*2); // we can access each element inside!
});
// => 2
// => 4
// => 6
// => 8

var raceResults = ['Hellen', 'John', 'Peter', 'Mery'];
raceResults.forEach(function(elem, index){
  console.log(elem + ' finished the race in ' + (index+1) + ' position!');
});

// => Hellen finished the race in 1 position!
// => John finished the race in 2 position!
// => Peter finished the race in 3 position!
// => Mery finished the race in 4 position!

function printStars(howMany){
  var stars = '';
  for (var i=0; i < howMany; i++) {
    stars += '*'
  }
  console.log(stars);
}

[1,2,3,4,5].forEach(function(num){
  printStars(num)
});

// String Split function
var phrase = "This is long enough for a string to count it words";

var words = phrase.split(" ");

console.log(words);
console.log(words[0]);
console.log(words.length);