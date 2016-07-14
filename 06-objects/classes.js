// var myCar = new Vehicle(2013, 65000);
// var myCar2 = new Vehicle(2013, 232728);
// var myCar3 = new Vehicle(2013, 9999);
//
// console.log(myCar);
// console.log(myCar2);
// console.log(myCar3);
//
//
// // Constructor Function
// function Vehicle(year, mileage) {
//   this.year = year;
//   this.mileage = mileage;
// }

// class
function Pokemon(type, level) {
  this.type = type;
  this.level = level;
}

// method
Pokemon.prototype.levelUp = function() {
  this.level++;
};

// new object
var pikachu = new Pokemon('electric', 10);
console.log("pikachu", pikachu);
pikachu.levelUp();
console.log('pikachu', pikachu);
