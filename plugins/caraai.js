let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Namamu', m)

	axios.get(`https://api.brainshop.ai/get?bid=159811&key=S1IFzsWHWPjwi9ah&uid=[uid]&msg=${text}`).then ((res) => {
	 	let hasil = `Reply : ${res.data.cnt}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cara'].map(v => v + ' <nama>')
handler.tags = ['tools']
handler.command = /^(cara)$/i
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
handler.limit = false

module.exports = handler
