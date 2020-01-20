const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    channel.overwritePermissions(channel.guild.defaultRole, { SEND_MESSAGES: false }).then(() => { 
    message.channel.send("**:white_check_mark: Channel is now locked.**");
            message.delete()
    }
};

exports.help = {
  name: 'lock',
}; 
