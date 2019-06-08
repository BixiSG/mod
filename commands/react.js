const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "169131719042007041") return;
    message.react(`✔️`);

}

module.exports.help = {
    name: "react"
}
