const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Eğlence Menüsü',`
<a:yildizz:768859233382694982>**.golat** : Gol Atarsınız
<a:yildizz:768859233382694982>**.kartopu** : Etiketlediğiniz kişiye kar topu atarsınız.
<a:yildizz:768859233382694982>**.espri** : Espri Yaparsınız.
<a:yildizz:768859233382694982>**.tkm** : Taş Kağıt Makas oynarsınız.
<a:yildizz:768859233382694982>**.yumruk-at** : Etiketlediğiniz kişiye yumruk atarsınız
<a:yildizz:768859233382694982>**.adamasmaca** : Adam Asmaca Oyunu.
<a:yildizz:768859233382694982>**.avatar** : Etiketlediğiniz kişinin avatarını gösterir
<a:yildizz:768859233382694982>**.tablet** : Tablet Reyiz açar
<a:yildizz:768859233382694982>**.wasted** : Ölürsünüz (Harbiden wasted yani)
<a:yildizz:768859233382694982>**.atasözü** : Atasözü söyler.
<a:yildizz:768859233382694982>**.tokatat** : Etiketlediğin kişiye tokat atar.
<a:yildizz:768859233382694982>**.deyim** : Deyim söyler.`)
    .setImage("https://cdn.discordapp.com/attachments/769281758977458176/783299061012234260/standard_21.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};