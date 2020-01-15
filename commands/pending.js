const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Permission denied.");
    
    let inline = true
    let resence = true
    const status = {
        online: ":green_heart: Online",
        idle: ":yellow_heart: Idle",
        dnd: ":no_entry: Do Not Disturb",
        offline: ":grey_question: Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = ":robot: Yes";
  } else {
    bot = ":x::robot: No";
  }


            let embed = new Discord.RichEmbed()
                .setThumbnail('https://i.ibb.co/mBPZ3Yb/db998eb39c.png')
                .setColor("#FFFF00")
                .addField("__**PENDING**__", `${member.user.tag}**, your appeal is currently in a pending stage.**\nThat means Staff would investigate your case in a while.\n\n*NOTE: Do NOT tag Staff members, you will get notified soon.*`)
                .setFooter(`${member.user.username}, this is an automated message. Do not respond.`, 'https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5029-512.png');
    
            message.channel.send(embed);

            message.delete();
            message.channel.setName("⏳-pending")
    }

   module.exports.help = {
        name: "pending"
    }
