const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information:")
        .setColor("#15f153")
        .setThumbnail(bicon)
.addField("CLANWAR Bot", "(moderation & fun")
.addField("Bot Creator:", "Dark#3668");
        return message.channel.send(botembed);
}

module.exports.help = {
        name: "botinfo" 
}
