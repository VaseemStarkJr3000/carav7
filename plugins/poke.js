let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`http://zekais-api.herokuapp.com/pokemon?query=${response}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.image, 'pokemon.jpg', `*Here we go*`, m, false)
}
handler.help = ['poke'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(poke)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = 
