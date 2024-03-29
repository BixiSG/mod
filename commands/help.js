const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setDescription("**HELP MENU**")
.setColor("#6a0dad")
.addField("Discord & Server support:", "<#618903822319747072>")
.addField("How to report a user:", "`-report [@user] [reason]`")

message.channel.send(helpembed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
let modembed = new Discord.RichEmbed()
.setDescription("**MOD HELP MENU**")
.setColor("#6a0dad")
.addField("Default Prefix:", "`-`")
.addField("**Mod Commands**", "List of Mod Commands and usage")
.addField("dm", "sends direct message to a specified user")
.addField("addrole", "adds role to user")
.addField("removerole", "removes role from user")
.addField("warn", "warns a user")
.addField("warnlevel", "warning level")
.addField("kick", "kicks a user")
.addField("ban", "bans a user")
.addField("tempmute", "tempory mute on users; can be done as `s` (seconds), `m` (minutes), `h` (hours), `d` (days)")
.addField("mute", "mutes user permanently")
.addField("unmute", "unmute user")
.addField("clear", "clears messages above; include number of messages to be cleaned")
.addField("prefix", "allows you to change prefix")
.addField("stats", "displays bot stats")
.addField("serverinfo", "displays server information")
.addField("cat", "sends random cat picture/gif")
.addField("doggo", "sends random dog picture/gif")
.addField("meme", "sends random meme from Reddit/me_irl")
.addField("<command> help", "shows usage for command");

try{
  await message.author.send(modembed);
  message.react("✅");
}catch(e){
  message.reply("Error: `DMs are closed`");  
}


    }
}

module.exports.help = {
    name: "help"
}
