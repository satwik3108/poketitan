const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = (bot, message, args) => {


  if(!coins[message.author.id]){
    return message.reply("Hey Lazy Earn Money First Then Pay");
  }

  let pUser = message.guild.member(message.mentions.user.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let  sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("You Don't Have Enough Coins!");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])

  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} Has Given ${pUser} ${args[1]} Coins.`);

  fs.weiteFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });




}

module.exports.help = {
  name: "pay"
}
