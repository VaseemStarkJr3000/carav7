let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/wallpaper')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nyaa', m)
}
handler.help = ['rpaper']
handler.tags = ['internet']
handler.command = /^rpaper$/i

module.exports = handler
