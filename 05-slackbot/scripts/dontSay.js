// commands:
// * how awesome

module.exports = function(robot) {
  robot.hear(/.*how awesome/i, function(msg) {
    msg.send("You are awesome");
  });

};
