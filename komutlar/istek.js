const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Lütfen bir istek girin! Örnek Kullanım: **a!istek ban**')

const avex = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription('İsteğiniz başarıyla iletildi\nEn Yakın Zamanda Cevap Vereceğiz')
message.channel.send(avex)

const avex2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının **isteği ;**`)
.addField(`**Gönderen Kişinin Bilgileri**`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("**Gönderilen İstek Mesajı**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('782380355666837536').send(avex2); //KANAL ID

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'İsteğinizi Yetkililere Bildirirsiniz.',
    usage: 'istek <isteğiniz>'
}