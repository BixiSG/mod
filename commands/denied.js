const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author


            let embed = new Discord.RichEmbed()
                .setThumbnail((target.displayAvatarURL))
                .setColor("#ff0000")
                .addField("**DENIED**", "${member.user.tag}, your appeal was denied. That means you need to wait out your ban(mute) or purchase an unban(unmute) at http://store.clanwar.cf in the *Pardons* category.")
                .setFooter(`${member.user.username}, this is an automated message. Do not respond.`, 'https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5029-512.png')
    
            message.channel.send(embed);

            message.delete();
    }
