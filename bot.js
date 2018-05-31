
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
		console.log("AAAAAAAA");
		console.log(message.guild.roles);
		let role = message.guild.roles.array().filter(function(item) {
		return item.name === "Looking for Game";	
		});
		console.log(role);
		//message.member.addRole(role).then(message.channel.send("Alright <@"+message.author.id+">, you're looking for a game!")).catch(console.error);
		
	}
	if (message.content.substring(0, 8) === "!unready"){
		let role = message.guild.roles
		message.member.removeRole(role).then(message.channel.send("Alright <@"+message.author.id+">, you're no longer looking for a game!")).catch(console.error);
	}
		
	});

	client.login(process.env.BOT_TOKEN);
