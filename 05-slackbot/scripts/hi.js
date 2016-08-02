// commands:
//  Hi - hubot responds with "Hello from Hubot!"
// Hubot bye - Hubot reposnds with "goodbye from hubot!"

module.exports = function(robot) {
  robot.hear(/hi/i, function(msg) {
    msg.send("hello from hubot");
  });

  robot.respond(/bye/i, function(msg) {
    msg.send("goodbye from hubot!");
  });
};
