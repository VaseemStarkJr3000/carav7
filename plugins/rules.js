let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
━━❰ *･Bot🤖Mods･* ❱━━

1| *Dont call the bot*
2| *Dont spam commands in groups or pm*

━━❰ *Cra* ❱━━

`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['main']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
