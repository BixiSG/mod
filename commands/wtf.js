const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    const yowtf = "./images/w6dfda0adjl21.jpg";
    const embed = new Discord.RichEmbed()
    .setColor(0x0000)
    .setImage(yowtf)
    message.channel.send(embed)
    

}

module.exports.help = {
    name: "wtf"
}
