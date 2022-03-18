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
                .setThumbnail('https://i.ibb.co/GHSQKC4/x-mark-png-6.png')
                .setColor("#ff0000")
                .addField("__**DENIED**__", `${member.user.tag}**, your appeal was denied.**\n\nThis means you need to wait out your ban(mute) or appeal after 30 days.\n\n:information_source: **NOTE:** Ban evading will result in a Blacklist.\n`)
                .setFooter(`${member.user.username}, this decision is final. Do not create other tickets for this case.`, 'https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5029-512.png');
    
            message.channel.send(embed);
            message.delete();
            message.channel.setName("❌-denied")
            .then(r => {
                  r.overwritePermissions(member.id, { 
SEND_MESSAGES: false,
VIEW_CHANNEL: true
});
                        })
    }

   module.exports.help = {
        name: "denied"
    }
