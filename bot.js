const Discord = require('discord.js');
const.client = newDiscord.Client();

client.on('ready' () => {
  console.log('I am ready!');
});
 
 cleint.on('message', message => {
  if (message.content === 'ping'){
    message.reply('pong');
   }
  });
  
  // THIS MUST BE THIS WAY
  client.login(process.env.BOT_TOKEN);
