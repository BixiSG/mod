const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let role = message.guild.roles.find(role => role.name === '✔');
    if (message.channel.name !== 'verification') return message.reply(':x: You must go to the channel #verification');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#eeee00')
            .setDescription(':x: Your account has already been verified!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#008000')
            .setDescription(':white_check_mark: Your account has been successfully verified.')
        return message.channel.send((verifyEmbed));
    }
}

module.exports.help = {
    name: 'verify',
    description: 'you must have the ✔ role'
}
