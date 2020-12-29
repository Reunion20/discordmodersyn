const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if(!rol) {
const Reunion2 = new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}otorol @rol #kanal**`)
  .setColor("RED")
  .setFooter("Reunion")
return message.channel.send(Reunion2)
};
if(!kanal) {
const Reunion3 = new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}otorol @rol #kanal**`)
  .setColor("RED")
  .setFooter("Reunion")
return message.channel.send(Reunion3)
};
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
const Reunion = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Otorol Rol Sistemi Başarılı Bir Şekilde Oluşturuldu`)
.addField("Ayarlanan",`> **Oto Rol:** **<@&${rol.name}>**
> **Oto Rol Kanal:** \`<#${kanal.id}>\`

\`Not:\` Botun Rolünü Bütün Rollerden Üstte Tutun Aksi Takdirde Rol Vermeyecektir`)
.setFooter("Reunion")
message.channel.send(Reunion)
};
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oto-rol','otorol'],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'Sunucuya Katılan Kullanıya Rol Verir',
  usage: 'otorol'
};