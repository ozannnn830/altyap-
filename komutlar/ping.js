const Discord = require('discord.js');
const db = require('quick.db');

const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
   var olcum = await message.channel.send( ' Ölçüm yapılıyor, lütfen bekleyiniz.').then(msg => msg.delete(1500))
 var olcum2 = await message.channel.send( ' Ölçüm yapılıyor, lütfen bekleyiniz..').then(msg => msg.delete(1500))
 var olcum3 = await message.channel.send( ' Ölçüm yapılıyor, lütfen bekleyiniz...').then(msg => msg.delete(1500))
     await message.channel.send(`Tepki gecikmesi, **${Math.round((olcum2.createdTimestamp - olcum.createdTimestamp - client.ws.ping) )}**ms\nBot gecikmesi, **${Math.round(client.ws.ping)}\**ms`).then(msg => msg.delete(15000))
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: ' ',
  usage: ''
};