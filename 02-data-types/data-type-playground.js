// We always use the Var keyword when declaring variables;
var magician = 'Gob Bluethe';
console.log(magician);

// Always use camelCase
var theMagician;

// 1. String
// 2. number
// 3. number
// 4. Boolean
// 5. Number

// Typeof tells us what datatype we have;
console.log(typeof 6);
console.log(typeof 'Gob');

// We get undefined when the var has nothing assigned to it
var magicianName;
console.log(magicianName);

// Strings are used to store words
console.log(typeof "Milk was a bad' choice");
console.log(typeof 'Milk was a bad choice');
console.log('Milk was a "bad choice');

//
var name = 'gob';
var message = 'hello ' + name + '!';
console.log(message);

// Boolean
// var isAvailable = true;

// Add Numbers -- beware of floating point math
var number = 0.1 + 0.2
console.log(number);

// remember PEMDAS

// % Modulo opp;
// Number assignment operators;
var x = 3;
x+=2; // This is the same as x = x + 2;
x/=2; // This is the same as x = x / 2;
console.log(x);

// The increment opp adds 1 to any number
var x = 0;
x++;
console.log('x = ', x); // x = 1

// Decrement or subtract 1 from a number
var x = 0;
x--;
console.log('x = ', x); // x = 0

// Create a random number between one and two
console.log(Math.floor(Math.random()*2 + 1));

// Array constructor with multiple params
var numbers2 = new Array[1, 2, 3, 4, 5];
console.log(numbers2);

// Array literals are much cleaner for creating arrays
var moreNumbers = [1, 2, 3];
console.log(moreNumbers);

// The items in our arrays are all called elements
// we can retrieve them using brackets and its position
var family = ['brian', 'nicole', 'sally'];
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);

console.log(family.length)

family[99] = 'gary';
console.log(family)
console.log(family.length)


// We can use shift and unshift to work from the beginning of the array

var extendedFamily = ['dave'];
console.log(extendedFamily)
extendedFamily.unshift = ('michael');
console.log('post shift', extendedFamily)

// Use reverse to flip the contents of the array
extendedFamily.reverse()
console.log('reversed extended family', extendedFamily)

// We can join elements together using array.join
var productIds = [12, 34, 56, 7, 8, 99];
console.log('productsIds, productIds');
var product IdString = productIds.join();
console.log('productIdString', productIdstring);
