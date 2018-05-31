
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
	herokupg.connect();
	client.user.setUsername("SA-TA");
	client.user.setActivity('type !help for commands', {
		type: 'WATCHING'
	});
});


client.on('message', message => {
	if (message.cleanContent.startsWith('!ready '){
		let role = message.guild.roles.find("Looking for Game");
		message.member.addRole(role).catch(console.error);
	}
	if (message.cleanContent.startsWith('!unready '){
		let role = message.guild.roles.find("Looking for Game");
		message.member.removeRole(role).catch(console.error);
	}
	/*if (message.cleanContent.startsWith('!whosready '){
		
	}*/	
		
	});

	client.login(process.env.BOT_TOKEN);
