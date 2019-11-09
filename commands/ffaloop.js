var Discord = require("discord.js");
var bot = new Discord.Client();

var NOTIFY_CHANNEL;
bot.on('ready', () => {
    NOTIFY_CHANNEL = bot.channels.find('id', '602244232794865665'); // Channel to send notification
});

const START_DATE = '2018-08-04'; // Date used as the starting point for multi-hour intervals, must be YYYY-MM-DD format
const START_HOUR = 19; // Hour of the day when the timer begins (0 is 12am, 23 is 11pm), used with START_DATE and INTERVAL_HOURS param
const INTERVAL_HOURS = 1; // Trigger at an interval of every X hours
const TARGET_MINUTE = 0; // Minute of the hour when the chest will refresh, 30 means 1:30, 2:30, etc.
const OFFSET = 10; // Notification will warn that the target is X minutes away

// Don't change any code below
const NOTIFY_MINUTE = (TARGET_MINUTE < OFFSET ? 60 : 0) + TARGET_MINUTE - OFFSET;
const START_TIME = new Date(new Date(START_DATE).getTime() + new Date().getTimezoneOffset() * 60000 + START_HOUR * 3600000).getTime();

setInterval(function() {
    var d = new Date();
    if(Math.floor((d.getTime() - START_TIME) / 3600000) % INTERVAL_HOURS > 0) return; // Return if hour is not the correct interval
    if(d.getMinutes() !== NOTIFY_MINUTE) return; // Return if current minute is not the notify minute
    NOTIFY_CHANNEL.sendMessage('Refresh in ' + OFFSET + ' minutes!');
}, 60 * 1000); // Check every minute

bot.on("message", function(message) {
	var input = message.content.toUpperCase();
	if(input === "1")
	{
		message.reply("2");
	}
	if(input === "11")
	{
		message.reply("22");
	}
	if(input === "111")
	{
		message.reply("222");
	}
	if(input === "1111")
	{
		message.reply("2222");
	}
	if(input === "11111")
	{
		message.reply("22222");
	}
});

