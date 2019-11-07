const Discord = require("discord.js");
exports.run = (client, message, args) => {
      if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply(':x: Missing `ADD_REACTIONS` perms.')
      const sayMessage = args.join(" ");
     if (sayMessage.length < 1) return message.channel.send(":x: Usage: `-poll text`")
     if (message.member.hasPermission("KICK_MEMBERS")) 
     {
       const embed = new Discord.RichEmbed()
       .setColor("#6a0dad")
       .setDescription(`**${sayMessage}**`)
       .setFooter('Vote buy clicking on one of the emojis.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe-CtUfZfNI2EEaRRIsmIyScVOWvlBY7U1VdZ35wXP8Dhv3qA_.png')
        message.channel.send(embed).then(m => {
            m.react('✅');
            setTimeout(function(){m.react('❌')}, 200);})
            message.delete();
             }
      }

  exports.help = {
    name: 'poll',
    description: 'runs react poll',
    usage: 'poll'
  };
