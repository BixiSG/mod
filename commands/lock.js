exports.run = (client, message, args) => {
   
    let modRole = message.guild.roles.find('name', 'Staff');
    if (!message.member.roles.has(modRole.id)) {
        return message.reply(':x: **No permissions to use that.**').catch(console.error);
    }
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`**:white_check_mark: Channel is now locked.**`)
        }
};
exports.help = {
  name: 'lock',
}; 
