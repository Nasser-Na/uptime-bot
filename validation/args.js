const { Validation } = require("handler.djs");

module.exports = new Validation()
  .setCommnads(["uptime", 'delete'])
  .setExecution((message, next) => {
    const args = message[0];
    if (!args[0]) return message.reply("**❌ Please type the link**");
    else next();
  });
