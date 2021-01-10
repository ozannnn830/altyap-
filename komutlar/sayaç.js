const Discord = require('discord.js'),
      db = require('quick.db'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
const cowboysayı = args[1]
const cowboy_kanal = message.mentions.channels.first()
if(!cowboysayı || !cowboy_kanal) return message.reply(`Sayaç Sistemini Ayarlamak İçin Lütfen Sayı ve Kanal Belirtiniz. **Örn** : \`${prefix}sayaç #kanal 100\``)
if(isNaN(cowboysayı)) return message.reply(`Sayaç Sistemini Ayarlamak İçin Sayıyı Sadece Rakamlardan Yazmalısın!`)
  
await db.set(`FrenzyCode+SayaçSayı_${message.guild.id}`,cowboysayı)  
await db.set(`FrenzyCode+SayaçKanal_${message.guild.id}`,cowboy_kanal.id)  
  
message.reply(`Sayaç Başarıyla Ayarlandı!`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sayaç',
  description: 'Sayaç Sistemi - Frenzy Code',
  usage: 'sayaç <#kanal> <sayı>'
};
//Lord Creative