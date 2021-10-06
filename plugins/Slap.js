let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/slap')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'slap', 'cara')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['slap']
handler.tags = ['expression']
handler.command = /^slap/i

module.exports = handler
