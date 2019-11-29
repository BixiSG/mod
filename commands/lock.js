const ms = require('ms');
exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    let modRole = message.guild.roles.find('name', 'Staff');
    if (!message.member.roles.has(modRole.id)) {
        return message.reply(':x: **No permissions to use that.**').catch(console.error);
    }
    if (!time) return message.reply(':x: Wrong arguments. Example: `-lock 1h`');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.sendMessage('**:white_check_mark: Channel is now unlocked.**');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`**:white_check_mark: Channel locked for ${ms(ms(time), { long:true })}.**`).then(() => {

                client.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send('**:white_check_mark: Channel is now unlocked.**')).catch(console.error);
                    delete client.lockit[message.channel.id];
                }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};
exports.help = {
  name: 'lock',
}; 
