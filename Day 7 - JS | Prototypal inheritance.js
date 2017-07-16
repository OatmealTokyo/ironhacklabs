// Objects from constructors functions

function Animal(name, owner){
  this.name = name;
  this.owner = owner;
}

var myAnimal = new Animal('Mickey', 'Disney');
console.log(myAnimal.name);   //=> 'Mickey'

// NEW keyword is a constructor.  The constructor is a special method used to create and initialize objects
// using the same structure.

function Animal (name, owner) {
  this.name = name;
  this.owner = owner;
} 

var myAnimal   = new Animal("Arya", "Josephine");
var yourAnimal = new Animal("Max",  "Owen");

console.log(myAnimal.name);    // Arya
console.log(yourAnimal.name);  // Max

console.log(myAnimal.owner);   // Josephine
console.log(yourAnimal.owner); // Owen

//Arya and Max are instances of the Animal class. This means they share the same constructor.
//In other words, they are copies from the same image. All the instances of a class share the same attributes and methods,
//but their properties can have different values.

// To be able to distinguish them from other functions, it is a convention to capitalize the names of constructors.

// Create an Item constructor with name and price as properties. Then create two objects and initialize them with some values

function Item (name, price) {
    this.name = name;
    this.price = price;
}

var computerMouse = new Item("Logitech Mouse", 69.99);
var lgMonitor = new Item("LG 27 4K", 699.99);

// this refers, inside the constructor, to the object we are creating inside the constructor.

function Animal (name, owner) {
  this.name = name;
  this.owner = owner;
} 

var myAnimal = new Animal("Arya", "Josephine");

// Remember this has a different value depending on which is the caller of the function where this is referenced.

// Sharing behavior.
// An object prototype is an object that contains the constructor of the instance,
// the methods and properties of the prototype and the prototype of all the objects that inherit from.
// This way, all the instances share the same behavior, since they share the same prototype.
function Animal (name, owner) {
  this.name = name;
  this.owner = owner;
}

var myAnimal   = new Animal("Arya", "Josephine");
var yourAnimal = new Animal("Max",  "Owen");

Animal.prototype.showOwnerName = function(){
  return "My owner is " + this.owner;
}


console.log(myAnimal.showOwnerName());    //=> "My owner is Josephine"
console.log(yourAnimal.showOwnerName());  //=> "My owner is Owen"

//Create a method calculatePrice for the Item constructor.
//This method will return the price of the object by default.
//If the name of the Item is fruit, return the price of the Item minus 5%.

function Item(name, price){
  this.name = name;
  this.price = price;
}

Item.prototype.calculatePrice = function() {
  if (this.name === 'fruit') {
      return 0.95 * this.price;
  } else {
      return this.price;
  }
}

var ball = new Item('soccer ball', 15);
ball.calculatePrice();
// => 15

var fruit = new Item('fruit', 10);
fruit.calculatePrice();
// => 9.5

// Inheritance
function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

function Dog (name, owner){
  this.name = name;
  this.owner = owner;
  this.sound = "Guau Guau";
  this.humanRelation = "love";
}

var myAnimal = new Animal("Arya", "Josephine", "--");
var myDog = new Dog("Max",  "Owen", "Guau");

console.log(myAnimal.name);    // Arya
console.log(myDog.name);       // Max

// Inheritance
function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

function Dog (name, owner){
  Animal.call(this, name, owner);
  this.sound = "Guau Guau";
  this.humanRelation = "love";
}

var myAnimal = new Animal("Arya", "Josephine", "--");
var myDog = new Dog("Max",  "Owen");

// Add a Fruit constructor to the previous examples. This constructor will inherit from Item and have the next properties:
// Expiration date
// Brand

function Item(name, price){
  this.name = name;
  this.price = price;
}

function Fruit(name, price) {
    Item.call(this, name, price);
    this.expirationDate = '12/01/2017';
    this.brand = 'Acme';
}

Item.prototype.calculatePrice = function() {
  if (this.name === 'fruit') {
      return 0.95 * this.price;
  } else {
      return this.price;
  }
}

var ball = new Item('soccer ball', 15);
ball.calculatePrice();
// => 15

var fruit = new Item('fruit', 10);
fruit.calculatePrice();
// => 9.5

// inheritance prototype
function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

function Dog (name, owner){
  Animal.call(this, name, owner);
  this.sound = "Guau Guau";
  this.humanRelation = "love";
}

Dog.prototype = Object.create(Animal.prototype);

var myAnimal = new Animal("Arya", "Josephine", "--");
var myDog = new Dog("Max",  "Owen");

//fixing constructor function as the default constructor of dog.

function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

function Dog (name, owner){
  Animal.call(this, name, owner);
  this.sound = "Guau Guau";
  this.humanRelation = "love";
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var myAnimal = new Animal("Arya", "Josephine", "--");
var myDog = new Dog("Max",  "Owen");

// apply to fruit
// Try to make the full inheritance process between your Fruit and your product objects.

function Item(name, price){
  this.name = name;
  this.price = price;
}

function Fruit(name, price) {
    Item.call(this, name, price);
    this.expirationDate = '12/01/2017';
    this.brand = 'Acme';
}

Fruit.prototype = Object.create(Item.prototype);
Fruit.prototype.constructor = Item;

Item.prototype.calculatePrice = function() {
  if (this.name === 'fruit') {
      return 0.95 * this.price;
  } else {
      return this.price;
  }
}

var ball = new Item('soccer ball', 15);
ball.calculatePrice();
// => 15

var fruit = new Item('fruit', 10);
fruit.calculatePrice();
// => 9.5

// Add function askForFood to Animal prototype.

function Animal (name, owner, sound, askForFood) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
  this.askForFood = askForFood;
}

function Dog (name, owner){
  Animal.call(this, name, owner);
  this.sound = "Guau Guau";
  this.humanRelation = "love";
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var myDog = new Dog("Max",  "Owen");

//The __proto__ property

function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

Animal.prototype.showOwnerName = function(){
  return "I'm a domestic dog";
}

// We create an animal with no owner
var myAnimal = new Animal("Arya", "", "--");

myAnimal.showOwnerName = function(){
  return "I'm a lone wolf";
}

// We pick an owner for him
myAnimal.owner = "Ironhack";

myAnimal.__proto__.showOwnerName();

//Create a method isHealthy for Product(item?), allowing every Product and Fruit objects to execute it.
//By default, this method will return false. Overwrite the method in the Fruit’s prototype to return true.

function Item(name, price, isHealthy){
  this.name = name;
  this.price = price;
  this.isHealthy = false;
}

function Fruit(name, price, isHealthy) {
    Item.call(this, name, price, isHealthy);
    this.expirationDate = '12/01/2017';
    this.brand = 'Acme';
    this.__proto__.isHealthy = true;
}

watermelon.isHealthy = function() {
  return isHealthy = true;
}
function () {
  return isHealthy = true;
}
