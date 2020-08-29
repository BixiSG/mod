const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("❌ Please provide a person to ban.")
                .then(m => m.delete(5000));
        }

        if (!message.member.roles.some((r) => r.name === "Staff") {
        return message.reply("❌ You do not have permissions to ban members.")
        .then(m => m.delete(5000));
        }

        }

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);
        }

        if (!toBan.bannable) {
            return message.reply("❌ This person can't be banned.")
                .then(m => m.delete(5000));
        }


        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if (emoji === "✅") {
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`didn't work`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Ban canceled.`)
                    .then(m => m.delete(5000));
            }
        });
    }
};

module.exports.help = {
  name:"bh"
}
