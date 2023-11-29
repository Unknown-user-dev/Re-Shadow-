require("dotenv").config();
const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();

require("./handler")(client);

client.login(process.env.TOKEN);
