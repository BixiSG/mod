const Discord = require("discord.js");
const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

module.exports.run = async (bot, message, args) => {

if (command === 'a') { 	if (!args.length) { 		return message.channel.send(`You didn't provide any arguments, ${message.author}!`); 	} 	message.channel.send(`Command name: ${command}\nArguments: ${args}`); }
}

module.exports.help = {
    name: 'a'
}
