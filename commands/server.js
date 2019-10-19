const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let{body} = await superagent
  .get(`https://api.mcsrvstat.us/2/clanwar.cf`);

  let embed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Server Online:")
  .addField(players.online);

  message.channel.send(embed);

}

  module.exports.help = {
  name: "server"
}
