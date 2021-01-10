const Moment = require('moment')
const Discord = require('discord.js')
let prefix = '.'
module.exports = client => {
  
  const aktiviteListesi = [
    `${prefix}yardım | ${client.guilds.cache.size} sunucuya hizmet veriyoruz!`,
    '3',
    '2',
    '1,',
      'VEEE COWBOY ARTIK V12 !,'
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 1000)
}