const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.author.id === "169131719042007041") return message.channel.send(":x: Only usable by Developer.");
    message.channel.send(':wave: Restarting.').then(() => {
    process.exit(134);
   });
};
    
module.exports.help = {
        name: 'restart',
        usage: 'restart',
        description: 'Restarts the bot'
};
