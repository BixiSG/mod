const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, link, args, tools) => {
    
    const { body } = await superagent
    .get('http://www.reddit.com/r/randnsfw');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("NSFW:")
    .setImage(body.link)
    message.channel.send({embed})
    

}

module.exports.help = {
    name: "nsfw"
}
