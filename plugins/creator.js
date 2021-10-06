let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
━━❰ *･Bot🤖Mods･* ❱━━
*1| Tor II.*
https://wa.me/+918709022955
*2| Das-kUN*
https://wa.me/+919832361550
━━❰ *Cara* ❱━━
`.trim(), m)
}
handler.help = ['mods']
handler.tags = ['main']
handler.command = /^(mods)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = 
