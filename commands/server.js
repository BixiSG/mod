const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let{body} = await superagent
  .get(`https://mcapi.us/server/status?ip=clanwar.cf`);

  let embed = new Discord.RichEmbed()
  .setColor("#6a0dad")
  .setTitle("Server Information:", 'https://i.ibb.co/RP8JT1h/cw-server-logo.png')
  .addField("Players Online:", `**${body.players.now}**/${body.players.max}`)
  .addField("Core Version:", `${body.server.name}`)

  message.channel.send(embed);

}
        
  module.exports.help = {
  name: "server"
}
