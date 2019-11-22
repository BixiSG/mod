const Discord = require("discord.js");
const superagent = require("superagent");

var content = msg.content //contains all the text Ex: -profile Niri
var parts = content.split(" "); //splits everything up on spaces so you'll have an array of two strings
var mcName = parts[1]; //gets the second element of the array (since array indexing starts at 0)


module.exports.run = async (bot,message,args) => {

  let{body} = await superagent
  .get(`https://api.ashcon.app/mojang/v2/user/${mcName}`);

  let mcembed = new Discord.RichEmbed()
  .setColor("#008000")
  .setTitle(`Profile of ${mcName}`)
  

  message.channel.send(mcembed);

}
        
  module.exports.help = {
  name: "profile"
}
