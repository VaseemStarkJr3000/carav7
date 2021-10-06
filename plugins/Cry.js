let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/cry')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Cry', 'Nishimiya')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['cry']
handler.tags = ['expression']
handler.command = /^cry/i

module.exports = handler
