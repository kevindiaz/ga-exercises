var age = 30;

if(age === 40) {
  console.log("what's your order");
} else if(age >= 21) {
  console.log("You're 40 bro");
} else {
  console.log('no booze for you');
}

// ternary opp
// conditional ? true : false
age = 40;
var message = (age >= 21) ?
  'whats your order?' :
  'no booze for you';
console.log('ternary', + age + message);

// type coercion
console.log('4 < "6"', 4 < "6");
console.log('ga < GA'), 'GA' < "ga";

// capital letters are greater than small letters
console.log("'alex' < 'brian'", 'alex' < 'brian');

// Basically, always use ===

// == is the equality opp
// === is the identity oporator
//     This will always check the value AND THE type
console.log("dog" === "dog"); // would be true
console.log('5' == 5); // would be true
console.log('5' === 5); // would be false

console.log("dog" === "dog"); // would be true
console.log('"5" == 5', "5" == 5); // would be true
console.log('"5" === 5', "5" === 5); // would be false

// Objects and arrays check the memory address --
// equality and identity work differently
// with arrays and objects
var family = ['alex', 'brian'];
var family2 = ['alex', 'brian'];
console.log(family === family2); // False
// because they are different array INSTANCES

// Values can be truthy or falsey
var name = '' // falsy
if (name) {
  console.log('your name is: ', name)
} else {
  console.log("you don't have a name!");
}

var name = 'Some name'
if (name) {
  console.log('your name is: ', name)
} else {
  console.log("you don't have a name!");
}

var person;
// console.log(person.name);

// if(person) {
// var person = {};
// console.log('name: ', person.name) {
//
//   }
// } // Didn't finished notes
