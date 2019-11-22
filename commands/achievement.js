const Discord = require("discord.js");  
const request = require("request").defaults({ encoding: null });

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (args.length > 0) {
    const memeOutput = request(`https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement+get%21&t=${args.join("+")}`);
    message.channel.send({
      files: [{
        attachment: memeOutput,
        name: "mc.png"
      }]
    });
  } else {
    message.reply(":x: Usage: `-achievement text`");
  }
};

module.exports.help = {
  name:"achievement"
}
