const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

else if (command === 'a') { 	if (!args.length) { 		return message.channel.send(`You didn't provide any arguments, ${message.author}!`); 	} 	message.channel.send(`Command name: ${command}\nArguments: ${args}`); }
