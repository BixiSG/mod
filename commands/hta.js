const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
   let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if (!dUser) return message.channel.send("Can't find user!")
   if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You can't use that command!")
   let dMessage = args.join(" ").slice(22);

     dUser.send(`__**HOW TO APPEAL YOUR BAN/MUTE:**__ \n Go to #support channel and press :no_entry: emoji. \n\n __**КАК ПОДАТЬ АППИЛЯЦИЮ:**__ \n Перейдите в канал #support и нажмите на :no_entry: эмоцию. \n\n__**Automated message. DO NOT REPLY!**__`)

     message.author.send(`${message.author} **You have sent HTA Guide to** ${dUser}.`)

  }
  
  module.exports.help = {
  name:"hta"
}
