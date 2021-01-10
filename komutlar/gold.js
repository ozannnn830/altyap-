const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

 
    const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor("Cowboy", client.user.avatarURL())
.setColor("BLUE")
.setTitle("Gold Sistemi")
.setDescription("Hep bizimle daha ileriye!")
 .addField("Görünümüne düşkün müsün? O zaman bu tam sana göre!", "Bizlere destek olmak ve harika özellikler kazanmak için \`.p-menü\` yaz")
 .setFooter("Cowbpy", client.user.avatarURL())
 
 return message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-yardım"],
  permLevel: 0
};

module.exports.help = {
  name: "gold",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};