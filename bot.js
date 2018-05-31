
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
	console.log("AAAAAAAA");
	client.user.setUsername("SA-TA");
	client.user.setActivity('type !help for commands', {
		type: 'WATCHING'
	});
});


client.on('message', message => {
	if (message.content.startsWith('!ready')){
		console.log("AAAAAAAA");
		var role = message.guild.roles.find("Looking for Game");
		console.log(role);
		message.member.addRole(role).then(message.channel.send("Alright <@"+message.author.id+">, you're looking for a game!")).catch(console.error);
		
	}
	if (message.content.startsWith('!unready')){
		var role = message.guild.roles.find("Looking for Game");
		message.member.removeRole(role).then(message.channel.send("Alright <@"+message.author.id+">, you're no longer looking for a game!")).catch(console.error);
	}
	/*if (message.cleanContent.startsWith('!whosready '){
		
	}*/	
		
	});

	client.login(process.env.BOT_TOKEN);
