let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Username yang akan distalk', m)

  await m.reply('Searching...')
    axios.get('let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Username yang akan distalk', m)

  await m.reply('Searching...')
    axios.get('let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Username yang akan distalk', m)

  await m.reply('Searching...')
    axios.get('http://zekais-api.herokuapp.com/pokemon?query=' + text)
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let hasil = `Name : ${res.data.title}\nType : ${res.data.species}\nHeight : ${res.data.height}\nWeight : ${res.data.weight}\nGender : ${res.data.gender}\nBaseExp : ${res.data.baseExp}`

    conn.reply(m.chat, buf, 'foto.jpg', hasil, m)
         })
	})
}
handler.help = ['poke','pokemon'].map(v => v + ' <@user>')
handler.tags = ['internet']
handler.command = /^(poke|pokemon)$/i
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

module.exports = ' + text)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let hasil = `*IG STALKER*\n\nUsername : ${res.data.Username}\nFullName : ${res.data.name}\nFollowers : ${res.data.Jumlah_Followers}\nFollowing : ${res.data.Jumlah_Following}\nPost : ${res.data.Jumlah_Post}\nBio : ${res.data.Biodata}`

    conn.reply(m.chat, buf, 'foto.jpg', hasil, m)
         })
	})
}
handler.help = ['igstalk','stalkig'].map(v => v + ' <@user>')
handler.tags = ['internet']
handler.command = /^(igstalk|stalkig)$/i
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

module.exports = ' + text)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let hasil = `*IG STALKER*\n\nUsername : ${res.data.Username}\nFullName : ${res.data.name}\nFollowers : ${res.data.Jumlah_Followers}\nFollowing : ${res.data.Jumlah_Following}\nPost : ${res.data.Jumlah_Post}\nBio : ${res.data.Biodata}`

    conn.reply(m.chat, buf, 'foto.jpg', hasil, m)
         })
	})
}
handler.help = ['igstalk','stalkig'].map(v => v + ' <@user>')
handler.tags = ['internet']
handler.command = /^(igstalk|stalkig)$/i
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

module.exports = handler
