const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const Reunion1 = new Discord.MessageEmbed()
      .setDescription(`Ne Yazık Ki Bu Komutu Kullanmaya Yetkin Yok.`)
      .setColor("RED");
    message.channel.send(Reunion1);
    return;
  }
  if (!args[0]) {
    const Reunion2 = new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım **${prefix}reklamengel aç & kapat**`)
  .setColor("RED")
  .setFooter("Reunion")
    message.channel.send(Reunion2);
    return;
  }
  let kufur = await db.fetch(`kufur_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const Reunion3 = new Discord.MessageEmbed()
  .addField("Hata",`Reklam Engel Sistemi Zaten Açık`)
  .setColor("RED")
  .setFooter("Reunion")
      message.channel.send(Reunion3);
      return;
    } else {
      db.set(`kufur_${message.guild.id}`, "Açık");
      const Reunion4 = new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Reklam Engel Sistemi Başarılı Bir Şekilde Açıldı`)
  .setColor("GREEN")
  .setFooter("Reunion")
      message.channel.send(Reunion4);
    }
  } else if (args[0] == "kapat") {
    db.delete(`kufur_${message.guild.id}`);
    const Reunion5 = new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Reklam Engel Sistemi Başarılı Bir Şekilde Kapatıldıs`)
  .setColor("GREEN")
  .setFooter("Reunion")
    message.channel.send(Reunion5);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklamengel","reklam-engel"],
  permLevel: 2
};

exports.help = {
  name: "reklamengelaç",
  description: "Reklam Engel Sistemi, Linklerini Engeller",
  usage: "reklamengel"
};
