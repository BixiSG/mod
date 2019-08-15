const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, url, args, tools, uuid, name) => {
    
    const { body } = await superagent
    .get('https://api.namemc.com/profile/10387192-11c8-48cf-885b-90c584021839/friends');
    const embed = new Discord.RichEmbed()
    .setColor(#9909AB)
    .setTitle("**Add me as a fiend on NameMC:** mine.ly/Fiaxy.8")
    .setDescription("Text **text** *text* __text__")
    .setFooter(body.name)
    message.channel.send({embed})
    

}

module.exports.help = {
    name: "namemc"
}
