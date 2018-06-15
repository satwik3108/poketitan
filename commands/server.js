const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send("Join Our Discord Server https://discord.gg/gy9TUtD");
}

module.exports.help = {
  name: "server"
}