// commands:
// * how awesome

module.exports = function(robot) {
  robot.hear(/.*how awesome/i, function(msg) {
    msg.send("You are awesome");
  });
};

module.exports = function(robot) {
  robot.hear(/.*wake you up/i, function(msg) {
    msg.send("Type huroku open in the commend line from within the bots directory.");
  });
};

module.exports = function(robot) {
  robot.hear(/.*wake up/i, function(msg) {
    msg.send("Type huroku open in the commend line from within the bots directory.");
  });
};
