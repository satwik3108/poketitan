const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const pokemonfile = require("./pokemon.json");
let coins = require("./coins.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
let xp = require("./xp.json");
let purple = botconfig.purple;
let green = botconfig.green;
bot.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Could't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});
bot.on("ready",async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("on development")
});


bot.on("message",async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.diaplayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15F153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  let xpAdd = Math.floor(Math.random() *7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(green)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup)
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  console.log(`level is ${xp[message.author.id].level}`);


  
  if(cmd === `${prefix}serverinfo`){

          let sicon = message.guild.iconURL;
          let serverembed = new Discord.RichEmbed()
          .setDescription("Server Information")
          .setColor("#2e0fdd")
          .setThumbnail(sicon)
          .addField("Server Name", message.guild.name)
          .addField("Created On", message.guild.createdAt)
          .addField("YOU JOINED", message.member.joinedAt)
          .addField("Total Members", message.guild.memberCount);

          return message.channel.send(serverembed);
  }

  if([message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }


  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField(":money_with_wings:", `${coinAmt} coin added!`);

  message.channel.send(coinEmbed);
  }



  if(cmd === `${prefix}info bulbasaur`){

    let bulbasauricon = pokemon.bulbasaur;
    let pokemontype = pokemontype.bulbasaur;
    let bulbasaurembed = new Discord.RichEmbed()
    .setDescription("info")
    .setColor(purple)
    .addField("type", pokemontype)
    .setThumbnail(bulbasauricon);

    return message.channel.send(bulbasaurembed);
  }

  if(cmd === `${prefix}no help`){
    return message.channel.send("help");
  }
  

  if(cmd === `${prefix}pokemon`){
    return message.channel.send("Pokémons Are The Mythical Strong Creatures Usually Used For Battling... You Can Find Pokémons In Towns And Jungles", {
      file: "https://cdn.discordapp.com/attachments/454886243495313428/454923326658445313/image-2.jpg"
    });

  }
  if(cmd === `${prefix}ping`){
    return message.channel.send(`ping pong! ${Date.now() - message.createdTimestamp}ms`)
  }

  if(cmd === `${prefix}hello`){
    return message.channel.send("Hi Human");
  }

  if(cmd === `${prefix}server`){
    return message.channel.send("Join Our Discord Server https://discord.gg/gy9TUtD");
  }

  if(cmd === `${prefix}invite`){
    return message.channel.send("Invite The Bot To Your Server! https://discordapp.com/api/oauth2/authorize?client_id=449147607642537985&permissions=8&scope=bot")
  }


  if(cmd === `${prefix}hi`){
    return message.channel.send("Hi Trainer");
  }
  if(cmd === `${prefix}angrypika`){
    return message.channel.send("you have made pikachu angry", {
      file: "https://tse1.mm.bing.net/th?id=OIP.JUMfVC1glbR2GJ7zEwm_kwHaHn&pid=15.1&P=0&w=300&h=300"
    });
  }


  if(cmd === `${prefix}infopokemon`){
    return message.channel.send("pokemon", {
      file: "https://cdn.discordapp.com/attachments/454886243495313428/454911682167439360/JPEG_20180515_194110.jpg"
    });
  }

  if(cmd === `${prefix}bye`){
    return message.channel.send("Bye Trainer! Hope You Come Soon To Train Your Pokémon And Fight Gyms!")
  }
  });

  bot.login(tokenfile.token);
