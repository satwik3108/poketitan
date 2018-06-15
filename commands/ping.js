const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send(`ping pong! ${Date.now() - message.createdTimestamp}ms`)
}

module.exports.help = {
  name: "ping"
}