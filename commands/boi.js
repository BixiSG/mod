const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: This is a **PRIME** feature.");
   
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

            let embed = new Discord.RichEmbed()
                .setThumbnail('https://media.tenor.com/images/d9de4038d32d39d6064b1b46e05c29b4/tenor.gif')
                .setColor("#00ff00");
                
            message.channel.send(embed);
            message.delete();
           
                        })
    }

   module.exports.help = {
        name: "accepted"
    }
