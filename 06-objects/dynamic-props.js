var students = {};

students['bob'] = 99;
students['sam'] = 89;
students['fred'] = 79;

var studentName = 'fred';

console.log(students);
console.log(studentName + ' score was ' + students[studentName]);

for(var studentName in students) {
  console.log(studentName);
}

// for(var foo in students) {
//   console.log(foo + );
// }
