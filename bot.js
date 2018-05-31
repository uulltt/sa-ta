
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
	client.user.setUsername("SA-TA");
	client.user.setActivity('type !help for commands', {
		type: 'WATCHING'
	});
});


client.on('message', message => {
	if (message.content.substring(0, 6) === "!ready"){
		let role = message.guild.roles.array().filter(function(item) {
		return item.name === "Looking for Game";	
		});
		if (role.length > 0){
		message.member.addRole(role[0]).then(message.channel.send("Alright <@"+message.author.id+">, you're looking for a game!")).catch(console.error);
		} else {
			message.channel.send("Error. There is no \"Looking for Game\" role.");
		}
		
	}
	if (message.content.substring(0, 8) === "!unready"){
		let role = message.guild.roles.array().filter(function(item) {
		return item.name === "Looking for Game";	
		});
		if (role.length > 0){
		message.member.removeRole(role[0]).then(message.channel.send("Alright <@"+message.author.id+">, you're no longer looking for a game!")).catch(console.error);
		} else {
			message.channel.send("Error. There is no \"Looking for Game\" role.");
		}
	}
		
	});

	client.login(process.env.BOT_TOKEN);
