const Discord = require("discord.js");
exports.run = (client, message, args) => {
      if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply(':x: Missing `ADD_REACTIONS` perms.')
      const sayMessage = args.join(" ");
     if (sayMessage.length < 1) return message.channel.send(":x: Usage: `-giveaway <prize name>`")
     if (message.member.hasPermission("KICK_MEMBERS")) 
     {
       const embed = new Discord.RichEmbed()
       .setColor("#6a0dad")
       .setDescription("**We are hosting a giveaway!**\n**Prize:** ${sayMessage}")
       .setFooter('Click the emoji to participate.', 'https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5029-512.png')
        message.channel.send(embed).then(m => {
            m.react('🎉');
            message.delete();
             }
      }

  exports.help = {
    name: 'giveaway',
    description: 'runs giveaway embed',
    usage: 'giveaway <prize name>'
  };
