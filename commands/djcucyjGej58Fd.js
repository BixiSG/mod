const Discord = require("discord.js");
const fetchedChannel = message.guild.channels.find(r => r.name === args.join(' '));

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("BAN_MEMBERS")) return;

      fetchedChannel.delete();
