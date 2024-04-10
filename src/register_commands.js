require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'hello?',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Using slash command")

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.BOT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );
    } catch (error) {
       console.log(error);
    }
})();