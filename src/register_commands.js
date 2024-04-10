require('dotenv').config();
const { REST, Routes, Guild } = require('discord.js');

const commands = [
    {
        name: 'test',
        description: 'test',
    },
];

const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });
    } catch (error) {
        console.log(`Unkown error: ${error}`)
    }
});