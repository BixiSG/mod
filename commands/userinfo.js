const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
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
                .setThumbnail((target.displayAvatarURL))
                .setColor("#6a0dad")
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Not playing"}`,inline, true)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt)
                .addField("Server Join Number", member.guild.memberCount)
                .setFooter('Information about ${member.user.username}', 'https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5029-512.png')
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }
