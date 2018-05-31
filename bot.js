
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
	client.user.setUsername("SA-TA");
	client.user.setActivity('type !help for commands', {
		type: 'WATCHING'
	});
});

const ln = [
    "Let's Make A Comet!",
    "Dwarf Stars",
    "Hop And Skip",
    "Pipe Dreams",
    "Lakeside",
    "Four Corners",
    "Prickly Meadow",
    "Rise and Fall",
    "Simply Stumped",
    "Cut Them Down",
    "Cluttered Copse",
    "Buggy Forest",
    "Beware the Bouncy Mushrooms",
    "Sticky Switches",
    "Skillepede",
    "Backwoods at Bedtime",
    "Hopping Beach",
    "Capsized Cannons",
    "Crabbytown Capers",
    "Water Wickets",
    "Sliding on the Sand",
    "Oil Rigged",
    "Catkus Resort",
    "Floating Above Clouds",
    "Push It, Curve It",
    "Mellow Meadow",
    "Barricade Crusade",
    "Bounce Bastion",
    "Lights Out",
    "Crash Course",
    "Bounding About Bee Block Base",
    "Doze Off, Press On",
    "Debris Dodger",
    "Dragonslayer",
    "Big Bangs",
    "Blazing Hot Sand",
    "Hot Rod Rocket",
    "Golf Balls and Fire Walls",
    "Mirage A Tre",
    "Mt. Huffinpuff",
    "Slippery Slope",
    "Cemetary Crawl",
    "Haunt the Halls",
    "Crystaline Incline",
    "Diamond Derby",
    "Lightning Frightening",
    "Deep Sleep Dungeon Delve",
    "Mystery Missile",
    "Enemy Engineering",
    "Buckle Up for Belt Rides",
    "Freeze to Float",
    "Pipe Nightmare",
    "Time to Stop",
    "The Great Escape",
    "Battlefield Blitz",
    "Screws Loose in Mad Machines",
    "Outer Odyssey",
    "Lightspeed",
    "Bug Zapper",
    "Prism Prison",
    "Fireflies Light Up the Night",
    "Space Base Warp Trace",
    "Bugs in the System",
    "Shooting Star"
];

const ch = [
    "One Shot Wonder",
    "Release the Beast",
    "Autumn Forest Slide Ball",
    "Let Me In!",
    "Six-Footed Race",
    "Autoball Alcove",
    "Metal Bounce",
    "Beehive Beetdown",
    "Fiery Fury Hurry",
    "Snow Slider"
    "Skipping Stone",
    "My Buggy Buddy",
    "Smashing The Ice",
    "A Little Push, A Little Nudge",
    "Flight to the Finish"
];


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
	
	if (message.content.startsWith("!stats ")){
		var level = message.content.substring(7);
			var request = require('request').defaults({
encoding: null
		});
		request.get(encodeURI(' http://rightstickstudios.com/wickets/api/v1/stats.php?id=' + level.replace(/ /gm, '')), function (err, res, body) {
		var data = JSON.parse(body.toString()).data;
		console.log(data);
		var title = '. ';
		if (level.toLowerCase().charAt(0) === 'l'){
			title = ln[parseInt(level.substring(1))];
		}
		if (level.toLowerCase().charAt(0) === 'c'){
			title = ch[parseInt(level.substring(1))];
		}
		const embed = new Discord.RichEmbed().setTitle(title);
		for (var propName in data) {
			propValue = data[propName];
			embed.addField(propName.toString(), propValue.toString());
		}
		message.channel.send(embed);
		});
		
	}
		
	});

	client.login(process.env.BOT_TOKEN);
