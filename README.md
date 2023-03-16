This project is my first attempt at fixing the Discordjs.guide and making it easier and more user friendly to understand.

I have fixed every bug, every problem, and every error with the original code. I have also put everything together and I commented everything for an easier learning experience.

I'm not profficient in coding whatsover so if you see any errors please feel free to tell me!
____
DEPENDENCIES!

node.js: ^19.7.0
chalk: ^5.2.0
discord.js: ^14.8.0
dotenv: ^16.0.3
git: ^0.1.5
____
INSTALLATION INSTRUCTIONS:

1: In the main folder, create a file titled: config.json
2: copy this code inside of it: 
{
	"token": "insert-bot-token-here",
	"clientId": "insert-clientId-here",
	"guildId": "insert-guildId-here"
}
____
HOW TO RUN:

1: Before running the bot, open up a terminal that is cd'd into the main folder
2: Run this command: node deploy-commands
	This command is what uploads the /commands into the discord api for your bot to use.
	(You only need to run this the first time you run your bot, and every change you make to the files in the commands folder)
Once commands have been deployed run the command: node .
	This will start the bot and you can now use it.
____
SIDE NOTE:

NONE OF THIS CODE IS DIRECTLY MINE
ALL CREDIT GOES TO: https://github.com/discordjs/guide
