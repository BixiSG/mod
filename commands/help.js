const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setDescription("**HELP MENU**")
.setColor('RANDOM')
.addField("Default Prefix:", "`-`")
.addField("How to report a user:", "`-report [@user] [reason]`")

message.channel.send(helpembed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
let modembed = new Discord.RichEmbed()
.setDescription("**MOD HELP MENU**")
.setColor("#8300ff")
.addField("Default Prefix:", "`-`")
.addField("**Mod Commands**", "List of Mod Commands and usage")
.addField("addrole", "adds role to user")
.addField("removerole", "removes role from user")
.addField("warn", "warns a user")
.addField("warnlevel", "warning level")
.addField("kick", "kicks a user")
.addField("ban", "bans a user")
.addField("tempmute", "tempory mute on users can be done as s,m,h,d")
.addField("mute", "mutes user")
.addField("unmute", "unmute user")
.addField("clear", "like prune/purge only cleaner")
.addField("prefix", "allows you to change prefix")
.addField("stats", "displays bot stats")
.addField("serverinfo", "displays server information")
.addField("<command> help", "shows usage for command");

try{
  await message.author.send(modembed);
  message.react("✔️");
}catch(e){
  message.reply("Error: `DMs are closed`");  
}


    }
}

module.exports.help = {
    name: "help"
}
