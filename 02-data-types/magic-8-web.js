// Magic 8
function getAnswers() {
  var possibleAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it', 'yes, Most likely', 'Outlook good', 'Yes, Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
  alert("load new content");
  document.open();
  document.write("<h1>possibleAnswers[Math.floor((Math.random() * 18) + 0)]</h1>");
  document.close();


  // console.log(possibleAnswers[Math.floor((Math.random() * 18) + 0)]);
}

// function newContent() {
//   alert("load new content");
//   document.open();
//   document.write("<h1>Out with the old - in with the new!</h1>");
//   document.close();
// }
