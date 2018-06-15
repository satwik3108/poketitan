const Discord = require("Discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  
  }

  let uCoins = coins[message.author.id].coins;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField(":money_with_wings:", uCoins);
  
  return message.channel.send(coinEmbed);
  
  }
  
  
  module.exports.help = {
    name: "coins"
  }
  

