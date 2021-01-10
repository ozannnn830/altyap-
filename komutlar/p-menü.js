const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

  if (!db.fetch(`goldpuan_${message.author.id}`)) {
    const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor("Cowboy", client.user.avatarURL())
.setColor("BLUE")
.setTitle("Premium Sistemi")
 .setURL("https://discord.com/oauth2/authorize?client_id=774765565466116126&scope=bot&permissions=2")

 .setDescription(`
${message.author}, senin puanın: **0**
`)
 .addField(".p-market | .p-menu", `
Puanınızı ve market menüsünü gösterir.

Etkinlikleri tamamlayarak
bedava \`Gold Üye ve Ürünler\` alabilirsiniz!
`)
 .addField("Sohbet Etmek", `
sizlere 5 dakikada rastgele 5-75 arası puan verir.
`)
 
 .addField(".günlükhediyem", `
Her gün alınabilir.
1 oy karşılığında \`500-2.000\` arasında rastgele hediye puan alabilirsin.
`)
 
 .setFooter("Cowboy", client.user.avatarURL())
 
 return message.channel.send(Embed)
  }
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor("Cowboy", client.user.avatarURL())
.setColor("BLUE")
.setTitle("Gold Sistemi")
 .setURL("https://discord.com/oauth2/authorize?client_id=774765565466116126&scope=bot&permissions=2")
 .setDescription(`
${message.author}, senin puanın **${db.fetch(`goldpuan_${message.author.id}`)}**
`)
 .addField(".p-market | .p-menu", `
Puanınızı ve market menüsünü gösterir.

Etkinlikleri tamamlayarak
bedava \`Gold Üye ve Ürünler\` alabilirsiniz!
`)
 .addField("Sohbet Etmek", `
sizlere 5 dakikada rastgele 5-75 arası puan verir.
`)
 
 .addField(".günlükhediyem", `
Her gün alınabilir.
1 oy karşılığında \`500-2.000\` arasında rastgele hediye puan alabilirsin.
`)
 
 .setFooter("Cowboy", client.user.avatarURL())
 
 return message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pmenu","p-menu", "p-menü"],
  permLevel: 0
};

module.exports.help = {
  name: "pmenü",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
