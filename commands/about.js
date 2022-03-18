const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("CLANWAR Moderation Bot")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Name:", bot.user.username)
	.addField("Moderation:", "kick, ban, warn, tempmute, addrole, removerole")
	.addField("Report:", "report and see reports")
        .addField("Created by", "Dark#3668");

        return message.channel.send(botembed);
}

module.exports.help = {
        name: "about" 
}
