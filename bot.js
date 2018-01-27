const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDA0MzkyMDgzMTg5OTIzODQx.DU1c6A.Un2_Egh-4KItSTWBq96kEQv-Tuc');
