let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Enter a query!`
  let res = await fetch(global.API('http://zekais-api.herokuapp.com', '/pokemon?query', ={ q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, gender, species, baseExp, height, weight, image } = json.results[0]
let animeingfo = `✨️ *Name:* ${title}
🎆️ *Species:* ${species}
💌️ *Gender:* ${gender}
❤️ *Height:* ${height}
💚️ *Weight:* ${weight}
🌐️ *BaseExp*: ${baseExp}`
  conn.sendFile(m.chat, image, '', animeingfo, m)
}
handler.help = ['poke <title>']
handler.tags = ['poke']
handler.command = /^(poke|pokemon)$/i
//maapin fatur :<
module.exports = handler
