const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "CLANWAR BOT INVITE LINK",
    url: "https://discordapp.com/api/oauth2/authorize?client_id=582177610000367626&permissions=8&scope=bot",
    description: "Invite link for bot.",
    fields: [      
      {
        name: "Telegram",
        value: "[@dark_ones](https://t.me/dark_ones)"
      },
      
      {
        name: "Discord",
        value: "[Dark#3668](https://discord.gg/quHVxA8)"
      },
       
      {
        name: "Website",
        value: "[clanwar.cf](http://clanwar.cf)"
      },
      
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© CLANWAR - PVPCommunity's Project"
    }
  }
});
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'link',
  description: 'shows all related bot links',
  usage: 'link'
};
