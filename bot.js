
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
	if (message.cleanContent.startsWith('!ready ')){
		var role = message.guild.roles.find("Looking for Game");
		message.member.addRole(role).then(console.log).catch(console.error);
	}
	if (message.cleanContent.startsWith('!unready ')){
		var role = message.guild.roles.find("Looking for Game");
		message.member.removeRole(role).then(console.log).catch(console.error);
	}
	/*if (message.cleanContent.startsWith('!whosready '){
		
	}*/	
		
	});

	client.login(process.env.BOT_TOKEN);
