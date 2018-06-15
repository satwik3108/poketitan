const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send("Invite The Bot To Your Server! https://discordapp.com/api/oauth2/authorize?client_id=449147607642537985&permissions=8&scope=bot")
}

module.exports.help = {
  name: "invite"
}