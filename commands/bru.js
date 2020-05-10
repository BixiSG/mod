const Discord = require('discord.js');
const file = new Discord.MessageAttachment('https://media.tenor.com/images/d9de4038d32d39d6064b1b46e05c29b4/tenor.gif');

const bruEmbed = {
	title: 'bru',
	image: {
		url: 'https://media.tenor.com/images/d9de4038d32d39d6064b1b46e05c29b4/tenor.gif',
	},
};

channel.send({ files: [file], embed: bruEmbed });

exports.help = {
  name: 'bru',
}; 
