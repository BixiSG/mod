const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, host, online, args, tools) => { 

const { body } = await superagent 
.get('https://api.mcsrvstat.us/2/clanwar.cf'); 
const embed = new Discord.RichEmbed() 
.setColor(0x1488) 
.setTitle("__**CLANWAR Server Stats**__") 
.addField("IP:", body.host)
.addField("Online:", body.online);

message.channel.send({embed}) } module.exports.help = { name: "server"}
