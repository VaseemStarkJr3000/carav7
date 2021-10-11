let fetch = require('node-fetch')
let googleIt = require('google-it')
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk di cari', m)
  let url = 'https://api.brainshop.ai/get?bid=159811&key=S1IFzsWHWPjwi9ah&uid=[uid]&msg=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, cnt, snippet}) => {
    return `*${cnt}*`
  }).join`\n\n`
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
}
handler.help = ['cara', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^cara?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
