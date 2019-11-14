const Discord = require("discord.js");
const command = args.shift().toLowerCase();

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return;
      
      else if (command === 'close') {
    	if (!args.length) {
		  return message.channel.send(`:x: No option provided: **Accepted** or **Denied**.`);
                      	}
    	else if (args[0] === 'Accepted') {
      message.delete().catch();
	  	return message.channel.send('Accepted - test');
                                 	}
      else if (args[0] === 'Denied') {
      message.delete().catch();
	  	return message.channel.send('Denied - test');
                                 	}}
                                  
      
}

module.exports.help = {
  name: "close"
}
