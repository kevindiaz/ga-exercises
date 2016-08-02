var students = ['andrew', 'kevin', 'kyle'];

function iterator(ary) {
  return function() {
    return ary.pop();
  };
}

var studentGetter = iterator(students);
console.log(studentGetter());
console.log('students', students);
console.log(studentGetter());
console.log(studentGetter());
