const Discord = require('discord.js');
const fetchedChannel = message.guild.channels.find(r => r.name === args.join(' '));
fetchedChannel.delete();