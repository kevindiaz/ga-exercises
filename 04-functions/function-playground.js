// Function declaration
speak('hi')

var spoken = speak('hi');
console.log(spoken);

function speak(words1) {
  // words is a parameter
  console.log(words);
  return true;
}

// Function explression
var speak = function(words) {
  // words is a parameter
  return words
};
//
function greet(greeting)  {
	return 'hi';
};

console.log('greet(),' );

var a = greet;   // what is a?
var b = greet(); // what is b?
var c = b();     // what is c?
