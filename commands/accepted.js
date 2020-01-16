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
                .setThumbnail('https://i.ibb.co/8MgXmHy/check-mark-png-transparent.png')
                .setColor("#00ff00")
                .addField("__**ACCEPTED**__", `${member.user.tag}**, your appeal was accepted.**\n\nThat means you will be shortly unbanned(unmuted) OR your case is solved.`)
                .setFooter(`${member.user.username}, please, read the rules again at http://www.clanwar.cf/rules or in <#602241873259659416> channel.`, 'https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5029-512.png');
    
            message.channel.send(embed);

            message.delete();
            message.channel.setName("✅-accepted")
.then(r => {
                  r.overwritePermissions(member.id, { 
SEND_MESSAGES: false,
VIEW_CHANNEL: true
});
                        })
    }

   module.exports.help = {
        name: "accepted"
    }
