const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("__**CLANWAR Staff Commands:**__")
        .setColor("#15f153")
        .setThumbnail(bicon)
.addField("/p", "punishment command")
.addField("/logs", "list of the cheat logs")
.addField("/report", "report and see reports")
.addField("/dupeip", "alt accounts checker")
.addField("/history", "punishment history")
.addField("/find", "what server a player is on")
.addField("/vanish", "vanish")
.addField("/tele", "teleportation")
.addField("/mask", "rank masking")
.addField("/silentjoin", "toggle joining message");
        return message.channel.send(botembed);
}

module.exports.help = {
        name: "staff" 
}
