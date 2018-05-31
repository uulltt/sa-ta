
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
	client.user.setUsername("SA-TA");
	client.user.setActivity('type !help for commands', {
		type: 'WATCHING'
	});
});

function oPlayer() {
	this.attempt = 0;
	this.complete = 0;
	this.quit = 0;
	this.platinum = 0;
	this.gold = 0;
	this.silver = 0;
	this.bronze = 0;
	this.moon = 0;
}

const rt = {
	"attempt": {
		Text: "Attempts",
		Type: "players",
		Emoji: "<:starorb:294206206929666048>",
		Alternate: "attempts"
	},
	"complete": {
		Text: "Completions",
		Type: "players",
		Emoji: "<:WWThumbsUp:421081106109169674>",
		Alternate: "completions"
	},
	"quit": {
		Text: "Quitters",
		Type: "players",
		Emoji: "<:WWThumbsDown:421081208341004288>",
		Alternate: "quits"
	},
	"platinum": {
		Text: "Platnium Medals",
		Type: "medals",
		Emoji: "<:wwplatinum:320752761476087808>",
		Alternate: "medals"
	},
	"gold": {
		Text: "Gold Medals",
		Type: "medals",
		Emoji: "<:wwgold:320753151470731274>",
		Alternate: "medals"
	},
	"silver": {
		Text: "Silver Medals",
		Type: "medals",
		Emoji: "<:wwsilver:320753229686374400>",
		Alternate: "medals"
	},
	"bronze": {
		Text: "Bronze Medals",
		Type: "medals",
		Emoji: "<:wwbronze:320753268009467914>",
		Alternate: "medals"
	},
	"moon": {
		Text: "Moon Medals",
		Type: "medals",
		Emoji: ":full_moon:",
		Alternate: "medals"
	}
}

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
    "Snow Slider",
    "Skipping Stone",
    "My Buggy Buddy",
    "Smashing The Ice",
    "A Little Push, A Little Nudge",
    "Flight to the Finish"
];


client.on('message', message => {
	if (message.content.substring(0, 6) === "!ready" && message.author !== client.user){
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
	if (message.content.startsWith("!test")){
		console.log(message.content);
	}
	if (message.content.startsWith("!help")){
		message.channel.send("!ready - add yourself to \"Looking for Game\"\n!unready - remove yourself from \"Looking for Game\"\n!stats L<number> - get stats for Wonder Wickets Level\n!stats C<number> - get stats for Wonder Wickets Challengoid");
	}

	if (message.content.startsWith("!stats ") == true) {
		let cContent = message.content.substring(7).trim();
		if (["L", "C", "W"].includes(cContent[0]) == true) {
			// Level
			require("request").get("http://rightstickstudios.com/wickets/api/v1/stats.php?id=" + cContent, (error, result, body)=> {
				let cData = JSON.parse(body);
				if (cData.status == "success") {
					let cEmbed = new Discord.RichEmbed().setTitle("Stats for " + (cContent[0] == "L" ? ln[cContent.substring(1)] : (cContent[0] == "C" ? ch[cContent.substring(1)] : "A Workshop Level")));
					for (cKey in cData.data) {
						cEmbed.addField(rt[cKey].Emoji + " " + rt[cKey].Text, "**" + cData.data[cKey] + "** " + rt[cKey].Type);
					}
					message.channel.send(cEmbed);
				} else {
					message.channel.send("**Error**: Could not find data for specified level (*" + cContent + "*)");
				}
			});
		} else {
			// User
			if (cContent.includes(" L") || cContent.includes(" C") || cContent.includes(" W")){
				var level = cContent.substring(cContent.indexOf(" ") + 1);
				require("request").get("http://rightstickstudios.com/wickets/api/v1/stats.php?uid=" + cContent.substring(0, cContent.indexOf(" ")) + "&id=" + level, (error, result, body)=> {
				let cData = JSON.parse(body);
				if (cData.status == "success") {
					let cEmbed = new Discord.RichEmbed().setTitle("Stats for User on " + (cContent[0] == "L" ? ln[cContent.substring(1)] : (cContent[0] == "C" ? ch[cContent.substring(1)] : "A Workshop Level"))), cPlayer = new oPlayer();
					// Count Stats
					for (cKey in cData.data) {
						var i = 0;
						for (cType in cPlayer) {
							cPlayer[cType] += (cData.data[cKey] >> i++) & 1;
						}
					}

					// Display Stats
					for (cKey in cPlayer) {
						cEmbed.addField(rt[cKey].Emoji + " " + rt[cKey].Text, "**" + cPlayer[cKey] + "** " + rt[cKey].Alternate);
					}

					message.channel.send(cEmbed);
				} else {
					message.channel.send("**Error**: Could not find data for specified Steam ID (*" + cContent + "*)");
				}
			});
			} else {
			require("request").get("http://rightstickstudios.com/wickets/api/v1/stats.php?uid=" + cContent, (error, result, body)=> {
				let cData = JSON.parse(body);
				if (cData.status == "success") {
					let cEmbed = new Discord.RichEmbed().setTitle("Stats for User"), cPlayer = new oPlayer();
					// Count Stats
					for (cKey in cData.data) {
						var i = 0;
						for (cType in cPlayer) {
							cPlayer[cType] += (cData.data[cKey] >> i++) & 1;
						}
					}

					// Display Stats
					for (cKey in cPlayer) {
						cEmbed.addField(rt[cKey].Emoji + " " + rt[cKey].Text, "**" + cPlayer[cKey] + "** " + rt[cKey].Alternate);
					}

					message.channel.send(cEmbed);
				} else {
					message.channel.send("**Error**: Could not find data for specified Steam ID (*" + cContent + "*)");
				}
			});
		}
	}
	}
		
});

client.login(process.env.BOT_TOKEN);