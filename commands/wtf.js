const Discord = require('discord.js')
const yowtf = "./images/w6dfda0adjl21.jpg";
exports.run = async (client, message, args, tools) => {
    const embed = new Discord.RichEmbed()
    .setColor(0x0000)
    .setImage(yowtf)
    message.channel.send(embed)
    

}

module.exports.help = {
    name: "wtf"
}
