const Discord = require('discord.js');
const file = new Discord.MessageAttachment('https://media.tenor.com/images/d9de4038d32d39d6064b1b46e05c29b4/tenor.gif');

module.exports.run =async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Permission denied.");
	
const bruEmbed = {
	title: 'bru',
	image: {
		url: 'https://media.tenor.com/images/d9de4038d32d39d6064b1b46e05c29b4/tenor.gif',
	},
};

channel.send({ files: [file], embed: bruEmbed });
message.delete();
};
	
exports.help = {
  name: 'bru',
};
