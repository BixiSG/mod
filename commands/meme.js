const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, url, args, tools) => {
    
    const { body } = await superagent
    .get('https://meme-api.herokuapp.com/gimme');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("Meme:")
    .setImage(body.url)
    message.channel.send({embed})
    

}

module.exports.help = {
    name: "meme"
}
