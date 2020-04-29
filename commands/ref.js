const Discord = require("discord.js");const snekfetch = require('snekfetch');exports.run = async (client, message, args) => {	try { const { body } = await snekfetch .get('https://www.reddit.com/r/ArchitecturePorn.json?sort=top&t=week') .query({ limit: 800 }); const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18); if (!allowed.length) return message.channel.send(':x: Sorry, no fresh pictures yet.'); const randomnumber = Math.floor(Math.random() * allowed.length) const embed = new Discord.RichEmbed() .setColor(0x00A2E8)
.setTitle(allowed[randomnumber].data.title)
.setDescription("By: " + allowed[randomnumber].data.author)
.setImage(allowed[randomnumber].data.url)
message.channel.send(embed) } catch (err) { return console.log(err); }} module.exports.help = { name: "gay"}
