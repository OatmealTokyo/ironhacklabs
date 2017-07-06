// Key Value Pair

var someObject = {
  key1: value,
  key2: value,
  key3: value
}

{
  athletics100Men: "Justin Gatlin"
}

var olympicRecords = {
  athletics100Men: "Justin Gatlin"
}

var olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powel"
}

console.log(olympicRecords);
//=> Object {athletics100Men: "Justin Gatlin", athleticsLongJumpMen: "Mike Powel"}

olympicRecords.athletics100Men         // => "Usain Bolt"
olympicRecords["athleticsLongJumpMen"] // => "Mike Powel"

// Adding properties with dot donation
var olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powel",
}

olympicRecords.swimming200Men = "Michael Phelps";

// Update values
olympicRecords.athletics100Men = "Usain Bolt";

// or

olympicRecords["athletics100Men"] = "Usain Bolt";

// Removing values
delete olympicRecords.doubleOllie;

// or

delete olympicRecords["doubleOllie"];

// List Properties
Object.keys(olympicRecords);
// => ["athletics100Men", "athleticsLongJumpMen", "swimming200Men", "swimming400Women"]

//Exercise
// Iteration 1

var user = { name: "Otis", id: 7 };

// Iteration 2
var book1 = { title: "The Catcher in the Rye", author: "J.D Salinger", isbn: "0316769487", category: "Classic Literature" };
var book2 = { title: "To Kill a Mockingibrd", author: "Harper Lee", isbn: "0446310786", category: "Classic Literature" };
var book3 = { title: "Who Let the Dogs Out", author: "Oatmeal Pee", isbn: "032110786", category: "Classic Literature" };

// Iteration 3

var user = {
    name: "Otis",
    id: 7
    Books: [Book1, Book2]
}

// Dot Notation
user.books = [];
user.Books = [Book1, Book2, book3]

//Iteration 4
var library = [name, id, user.Books[0]. user.books[1], book1.title, book1. author, book2.title, books2.author]
var users = [
    user,
    user2
]

// Iteration 5
var book3 = { title: "Who Let the Dogs Out", author: "Oatmeal Pee", isbn: "032110786", category: "Classic Literature" };