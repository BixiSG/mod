const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
   let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if (!dUser) return message.channel.send("Can't find user!")
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't use that command!")
   let dMessage = args.join(" ").slice(22);
   if(dMessage.length < 1) return message.reply('You must supply a message!')

     dUser.send(`**Message from user:** <@!528992402132959244> \n **Message:** ${dMessage} \n ||(http://clanwar.cf/announcements/donotreply.png)||`)

     message.author.send(`${message.author} **You have sent your message to** ${dUser}.`)

  }
  
  module.exports.help = {
  name:"dm"
}
