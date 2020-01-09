const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const image = await client.getImage(message).catch(error => {
    message.reply(":x: Supply an image.");
    console.log(error);
  });
  if (image !== undefined) {
    message.channel.startTyping();
    gm(request(image)).threshold(75, true).out("+level-colors").out("\"#7289DA\",white").stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "bp.png"
        }]
      });
    });
  }
};
