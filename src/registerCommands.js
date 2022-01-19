require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [{
    name: 'help',
    description: 'Gives a simple help message.'
}];

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Refreshing slash commands.");

        await rest.put(
            Routes.applicationGuildCommands("933471710190141511", "933471537657442324"),
            {body: commands}
        );

        console.log("Successfully reloaded slash commands.");
    } catch(err) {
        console.error(err)
    }
})();