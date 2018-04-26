const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
     if (message.content.startsWith(prefix + "bc")) {
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
         message.react("✔️")
          let embed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setThumbnail(message.author.avatarURL)   
          .addField('Done By:', "<@" + message.author.id + ">")

           message.channel.sendEmbed(embed);
            message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
          .addField('**❁Server name **', `*** ⇝ ${message.guild.name}***`)               
          .addField(`***❁message***`, args)
          .setColor('#B40486')
          .addField('**❁Name of sender**', `*** ⇝ ${message.author.username}#${message.author.discriminator}***`)
         m.send(``,{embed: bc});
        });
        
    }
    
});

client.login('NDM5MTM0ODIyMjcxNTQ5NDUw.DcPT_A.ODQyK4fMneCiIdiR6BkxdyRO8c0');
