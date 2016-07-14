/**
 * Work with a partner to create a monkey object, which has the following properties:
 *
 *   name
 *   species
 *   foodsEaten
 *
 * And the following methods:
 *
 *   eatSomething(thingAsString)
 *   introduce(): produces a string introducing itself, including its
 *                name, species, and what it's eaten.
 *
 * Instructions:
 *
 * Create 3 monkeys total.
 * Make sure all 3 monkeys have all properties set and methods defined.
 * Exercise your monkeys by retrieving their properties and using their methods.
 *
 * Practice using both syntaxes for retrieving properties (dot notation and brackets).
 */

// class
function Monkey(name, species) {
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
}

// Methods
Monkey.prototype.eatSomething = function(food) {
  this.foodsEaten.push(food);
};

Monkey.prototype.introduce = function() {
  var eatenOrNot;
  if(this.foodsEaten.length) {
    eatenOrNot = '. I eat ' + this.foodsEaten;
  } else {
    eatenOrNot = '. I have not had any food.';
  }
  console.log('Hello my name is ' + this.name + ', and I am a' + this.species + eatenOrNot);
};

// Objects
var monkey1 = new Monkey('chimpster', 'chimp');
monkey1.eatSomething('banana');
// monkey1.eatSomething('pie');
// monkey1.eatSomething('chicken');
// console.log(monkey1);
monkey1.introduce();

var monkey2 = new Monkey('wallie', 'chimp');
monkey2.eatSomething('pizza');
// console.log(monkey2);

var monkey3 = new Monkey('luke', 'chimp');
monkey3.eatSomething('Sushi');
// console.log(monkey3);
