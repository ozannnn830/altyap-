const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Yardım Menüsü',`
<a:yildizz:768859233382694982>**.eğlence2** : Eğlence Komutları Açar (Part2)
<a:yildizz:768859233382694982>**.yardımcıkomutlar** : Yardımcı Komutları gösterir
<a:yildizz:768859233382694982> **.moderasyon** : Moderasyon Komutlarını Açar. (Yakında)
<a:yildizz:768859233382694982>**.eğlence** : Eğlence Komutları Açar.`)
    .setImage("https://cdn.discordapp.com/attachments/769281758977458176/783299061012234260/standard_21.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};