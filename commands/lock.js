const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
   
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Permission denied.");
message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
            }).then(() => {
            message.channel.send("**:white_check_mark: Channel is now locked.**")
            message.delete();
                          }
};
exports.help = {
  name: 'lock',
}; 
