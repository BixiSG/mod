const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

        let min = parseInt(args[0]);
        let max = parseInt(args[1]);

        if(min > max){
            let temp = max;
            max = min;
            min = temp;
        }

        var Result = Math.floor(Math.random() * (max - min + 1)) + min;

        if(isNaN(Result)){
            return message.channel.send("Enter a __MIN__ & __MAX__ number.")
        }else{
            message.channel.send(`**Result:** ${Result}`);
        }
      
}

module.exports.help = {
    name: "random"
}
