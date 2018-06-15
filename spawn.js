const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = ["https://cdn.discordapp.com/attachments/454886243495313428/455962611716980746/BiNcgxsdiSsd.png.", "https://cdn.discordapp.com/attachments/454886243495313428/455962611716980747/CLMXnAHoJBHz.png.", "https://cdn.discordapp.com/attachments/454886243495313428/455962612321222656/SVNIugrJFtLE.png.", "https://cdn.discordapp.com/attachments/454886243495313428/455962612807630868/EyrnISUymuXj.png"];

  let result = Math.floor((Math.random() * replies.length));

  let spawnembed = new Discord.RichEmbed()
  .setDescription("pokemon")
  .setColor("#FF9900")
  .addField("spawn", replies[result]);

  message.channel.send(spawnembed);









}

module.exports.help = {
  name: "spawn"
}
