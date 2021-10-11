let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)

	axios.get(`https://api.brainshop.ai/get?bid=159811&key=S1IFzsWHWPjwi9ah&uid=[uid]&msg=${text}`).then ((res) => {
	 	let hasil = `${res.data.cnt}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['bot'].map(v => v + ' <film>')
handler.tags = ['nime']
handler.command = /^(bot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
