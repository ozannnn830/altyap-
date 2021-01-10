const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Yardımcı Komutlar',`
<a:yildizz:768859233382694982>**.isimdeğiştir** : Etiketlediğiniz kişinin kullanıcı adını değiştirir .isimdeğiştir <@kullanıcı> <isim>
<a:yildizz:768859233382694982>**.sil** : Mesaj Siler sil <mesaj sayısı>
<a:yildizz:768859233382694982>**.ws.ping** : Botun pingini gösterir .ws.ping
<a:yildizz:768859233382694982>**.oylama** : oylama yapar <oylama <oylayacağınız şey>
<a:yildizz:768859233382694982>**.kilitle** : Kanala hiçkimse mesaj atamaz (Kanalı belirttiğiniz süre boyunca kilitler) kilitle <süre>
<a:yildizz:768859233382694982>**.eemojiekle** : İstediğiniz emojiyi ekler emojiekle <emoji urlsi> <olmasını istediğiniz ad>
<a:yildizz:768859233382694982>**.oyunara** : Belirttiğiniz ad ile oyun arar <oyunara> <oyun adı>
<a:yildizz:768859233382694982>**.yetkilerim** : Etiketlediğiniz kişinin yetkilerini gösterir. (yetkilerim`)
    .setImage("https://cdn.discordapp.com/attachments/769281758977458176/783299061012234260/standard_21.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardmckomut'],
  permLevel: 0
};

exports.help = {
  name: "yardımcıkomutlar",
  category: "yardım",
  description: "Yardımcı Komutları Gösterir."
};