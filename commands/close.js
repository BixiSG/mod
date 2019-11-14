const Discord = require("discord.js");
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === 'close Accepted') {
  message.channel.send('1');
} else
if (command === 'close Denied') {
  message.channel.send('2');
}

module.exports.help = {
  name: "close"
}
