const Discord = require('discord.js')//Modülümüzü tanımladık
exports.run = async(client, message) => {//Komutu çalıştıracak olan yer
let user = message.mentions.users.first()//Kullanıcı belirttik eğer kullanıcı etiketlersek onun avatarını eğer etiketlemez isek bizim avatarımızı göterece
if(user) {//eğer kullanıcı etiketlersek bunu gnderecek
const embed = new Discord.MessageEmbed()//Artık richembed yerine MessageEmbed() oldu bilginize
.setTitle(`<a:satik:739390491853979710>Kullanıcının Avatarı`)//başlık
.setImage(user.avatarURL())//resimi gönderecek
.setColor(`BLACK`)//embed rengini ayarladık
message.channel.send(embed)//kanala mesajı gönderiyoruz
} else {//eğer etiketlemez isek bunu
const embed = new Discord.MessageEmbed()//Artık richembed yerine MessageEmbed() oldu bilginize
.setTitle(`<a:satik:739390491853979710>Kullanıcının Avatarı`)//başlık
.setImage(message.author.displayAvatarURL())//resimi gönderecek
.setColor(`BLACK`)//embed rengini ayarladık
message.channel.send(embed)//kanala mesajı gönderiyoruz
}
};
exports.conf = {
enabled: false,//kapalı?
guildOnly: false, //sunucu özel?
aliases: ['pp'], //diğer adlar
permLevel: 0 //yetki
};
exports.help = {
name: 'avatar',//help komutu
description: '',//açıklaması
usage: ''//kullanımı
};