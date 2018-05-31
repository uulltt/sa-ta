
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
	
		
		
	});

	client.login(process.env.BOT_TOKEN);
