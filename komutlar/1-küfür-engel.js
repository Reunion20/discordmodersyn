const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client ,message, args) => {
if(args[0] === 'aç') {
db.set(`${message.guild.id}.kufur`, true)
const Reunion = new Discord.MessageEmbed()  
  .addField("İşlem Başarılı",`Küfür Engel Başarılı Bir Şekilde Akif Edildi`)
  .setColor("GREEN")
  .setFooter("Reunion ")
return message.channel.send(Reunion)
}
if (args[0] === 'kapat') {
db.delete(`${message.guild.id}.kufur`)
const Reunion = new Discord.MessageEmbed() 
  .addField("İşlem Başarılı",`Küfür Engel Başarılı Bir Şekilde Kapatıldı`)
  .setColor("GREEN")
  .setFooter("Reunion")
return message.channel.send(Reunion)
}
{
const Reunion = new Discord.MessageEmbed() 
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}kengel aç/kapat**`)
  .setColor("RED")
  .setFooter("Reunion")
return message.channel.send(Reunion)
}
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel','küfür-engel'], 
 permLevel: 0
};

exports.help = {
 name: 'kengel',
 description: 'Küfürleri Engeller',
 usage: 'kengel'
};
