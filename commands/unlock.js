exports.run = (client, message, args) => {
   
    let modRole = message.guild.roles.find('name', 'Staff');
    if (!message.member.roles.has(modRole.id)) {
        return message.reply(':x: **No permissions to use that.**').catch(console.error);
    }
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.send(`**:white_check_mark: Channel was unlocked.**`)
        }
};
exports.help = {
  name: 'unlock',
}; 
