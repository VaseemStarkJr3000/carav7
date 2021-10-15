let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://meme-api.herokuapp.com/gimme/wholesomeanimemes')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '*Here is your Animememe*', m)
}
handler.help = ['ameme']
handler.tags = ['internet']
handler.command = /^(ameme)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
