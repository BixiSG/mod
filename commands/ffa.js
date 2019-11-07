const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let{body} = await superagent
  .get(`https://mcapi.us/server/status?ip=clanwar.cf&port=25567`);

  let embed = new Discord.RichEmbed()
  .setColor("#6a0dad")
  .setTitle("FFA Server Information:")
  .addField("Status:", `**${body.online}**`)
  .addField("Players Online:", `**${body.players.now}**/${body.players.max}`)
  .addField("Core Version:", `${body.server.name}`)
  .setFooter(`clanwar.cf`, 'https://i.ibb.co/RP8JT1h/cw-server-logo.png')
  message.channel.send(embed);

}
        
  module.exports.help = {
  name: "ffa"
}
