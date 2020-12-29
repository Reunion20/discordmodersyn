const chalk = require('chalk')
const moment = require('moment')
const kanal = '742043139430285454'
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
  let tarih = moment().format('l');
    client.user.setPresence({activity:{name:`╰ 𝓡é𝓾𝓷𝓲𝓸𝓷 ╮`},status: 'online'})
    log(chalk.green(`[BOT] Aktif, Komutlar Yüklendi ${tarih}`))
  }

