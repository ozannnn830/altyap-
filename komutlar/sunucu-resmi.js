const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor("#36393F")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('⚠️ Uyarı ⚠️', '`sunucuresmi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.guild.name)
  .setColor("#36393F")
    .setTimestamp()
    .setDescription('')
       .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
        .setImage(`${message.guild.iconURL()} `)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-pp'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-resmi',
  description: 'Sunucu Resminin  Atar.',
  usage: 'sunucu-resmi'
};