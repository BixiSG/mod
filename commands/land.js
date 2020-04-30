const Discord = require("discord.js");
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
	let msg = await message.channel.send(":eyes: Looking for pictures...");
	try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/earthporn.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('No fresh memes. Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor(0x38761D)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("From r/EarthPorn")
        message.channel.send(embed)
	message.delete()
	msg.delete()
    } catch (err) {
        return console.log(err);
    }
}

module.exports.help = {
    name: "land"
}
