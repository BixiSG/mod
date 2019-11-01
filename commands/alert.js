const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("BAN_MEMBERS")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(`[:bell: @everyone]\n${sayMessage}`);

}

module.exports.help = {
  name: "alert"
}
