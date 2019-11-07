const Discord = require("discord.js");
exports.run = (client, message, args) => {
      if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply(':x: Missing ADD_REACTIONS perms.')
      const sayMessage = args.join(" ");
     if (sayMessage.length < 1) return message.channel.send(":x: Usage `-poll text`")
     if (message.member.hasPermission("KICK_MEMBERS")) {
       const embed = new Discord.RichEmbed()
       .setColor(#800080)
       .setTitle(" Poll: ")
       .setDescription(`**${sayMessage}**`)
        message.channel.send(embed).then(m => {
            m.react('✅');
            m.react('❌');
            
           })
 
      }
}
  
  exports.help = {
    name: 'poll',
    description: 'runs react poll',
    usage: 'poll'
  };
