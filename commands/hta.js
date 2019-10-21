const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
   let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if (!dUser) return message.channel.send("Can't find user!")
   if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You can't use that command!")
   let dMessage = args.join(" ").slice(22);

     dUser.send(`:pencil: __**HOW TO APPEAL YOUR BAN/MUTE:**__ \n Go to #:gear:-support channel and press :no_entry_sign: emoji.\n\n:flag_ru: __**КАК ПОДАТЬ АПЕЛЛЯЦИЮ:**__\nПерейдите в канал #:gear:-support и нажмите на :no_entry_sign: эмоцию.\n:flag_tr: __**BAN VEYA MUTEYE NASIL İTİRAZ EDİLİR:**__\n#:gears:-support kanalına git ve :no_entry_sign: emojisine tıkla.`)

     message.author.send(`${message.author} **You have sent HTA Guide to** ${dUser}.`)

  }
  
  module.exports.help = {
  name:"hta"
}
