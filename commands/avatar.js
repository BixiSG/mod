module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: This is a **PRIME** feature.");

  let msg = await message.channel.send("Generating avatar...");
  let target = message.mentions.users.first() || message.author;

  await message.channel.send({files: [
    {
      attachment: target.displayAvatarURL,
      name: "avatar.png"
    }
  ]});

  msg.delete();
}

module.exports.help = {
    name: "avatar"
}
