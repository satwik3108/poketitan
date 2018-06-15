const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bulbasaurembed = new Discord.RichEmbed()
  .setDescription("Info")
  .setColor("#2e0fdd")
  .addField("Type", "Seed Pokemon");

  return message.channel.send(bulbasaurembed, {
      file: "https://cdn.discordapp.com/attachments/454886243495313428/454923326658445313/image-2.jpg"
  });
}

module.exports.help = {
  name: "info bulbasaur"
}