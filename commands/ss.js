const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    
    const { body } = await superagent
    .get('https://mcapi.us/server/status?ip=clanwar.cf');
    const embed = new Discord.RichEmbed()
    .setColor(0x0000)
    .setTitle("Minecraft Server Stats")
    .addField("Online players:", body.players)
    message.channel.send(embed)
    

}

module.exports.help = {
    name: "ss"
}
