const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return;
  
  let{body} = await superagent
  .get(`https://mcapi.us/server/status?ip=clanwar.cc`);

  let embed = new Discord.RichEmbed()
  .setColor("#6a0dad")
  .setTitle("Server Information:")
  .addField("Players Online:", `**${body.players.now}**/${body.players.max}`)
  .addField("Core Version:", `${body.server.name}`)
  .setFooter(`clanwar.cc`, 'https://i.ibb.co/RP8JT1h/cw-server-logo.png')
  message.channel.send(embed);

}
        
  module.exports.help = {
  name: "server"
}
