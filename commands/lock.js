const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Permission denied.");

    let inline = true
    let resence = true
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

            let embed = new Discord.RichEmbed()
                .setThumbnail('https://i.ibb.co/GHSQKC4/x-mark-png-6.png')
                .setColor("#ff0000")
                .addField("__**LOCKED**__", `This channel is currently locked.`);
    
            message.channel.send(embed);
            message.delete();
            .then(r => {
                  r.overwritePermissions(channel.guild.defaultRole, { 
SEND_MESSAGES: false,
VIEW_CHANNEL: null
});
                        })
    }

   module.exports.help = {
        name: "lock"
    }
