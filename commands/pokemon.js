const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send("Pokémons Are The Mythical Strong Creatures Usually Used For Battling... You Can Find Pokémons In Towns And Jungles", {
      file: "https://cdn.discordapp.com/attachments/454886243495313428/454923326658445313/image-2.jpg"
      });
}

module.exports.help = {
  name: "pokemon"
}