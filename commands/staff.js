const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("__**CLANWAR Staff Commands:**__")
        .setColor("#15f153")
        .setThumbnail(bicon)
.addField("/p", "punishment command")
.addField("/p reasons", "punishment reasons")
.addField("/logs", "list of the cheat logs")
.addField("/acalerts", "anti cheat alerts configuration")
.addField("/report list", "all reported players")
.addField("/report check", "check player reports")
.addField("/dupeip", "alt accounts checker")
.addField("/history", "punishment history")
.addField("/find", "what server a player is on")
.addField("/vanish", "vanishing")
.addField("/tele", "teleportation")
.addField("/mask", "rank masking")
.addField("/sc", "staff chat toggling")
.addField("/staffalerts", "staff join alert")
.addField("/staffonline", "online staff members")
.addField("/silentjoin", "toggle joining message");
        return message.channel.send(botembed);
}

module.exports.help = {
        name: "staff" 
}
