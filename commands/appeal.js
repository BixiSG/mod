const Discord = require('discord.js');

message.channel.send('Reason:')
.then(() => {
  message.channel.awaitMessages(response => response.content === ' ', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      message.channel.send('Time out. Try again.');
    });
});
