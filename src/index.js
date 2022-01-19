require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.id}`)
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    if(interaction.commandName === 'help') {
        await interaction.reply("I am still in development!")
    }
})

client.login(process.env.TOKEN);