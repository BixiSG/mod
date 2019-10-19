const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("CLANWAR Staff Commands:")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("p", "punishment command")
	.addField("logs", "list of the cheat logs")
	.addField("report", "report and see reports")
        .addField("silentjoin", "toggle joining message");

        return message.channel.send(botembed);
}

module.exports.help = {
        name: "botinfo" 
}
