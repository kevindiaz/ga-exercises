// setTimeout ex.

// console.log('starting dinner');
//
// setTimeout(function() {
//   console.log('dinner is ready!');
// }, 5000);
//
// console.log('waiting for dinner to cook');

// setInterval ex.

console.log('starting email checker');

var emailCount = 1;
setInterval(function() {
  console.log('email checked ' + emailCount++ + ' times');
}, 2500);

console.log('email checker started');
