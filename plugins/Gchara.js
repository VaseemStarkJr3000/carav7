let fetch = require('node-fetch')
let timeout = 60000
let poin = 25000

let handler  = async (m, { conn, usedPrefix }) => {

    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.tebakanime[id][0])
        throw false
    }
    let res = await fetch('http://zekais-api.herokuapp.com/tebakanime')
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `GUESS CHARACTER \n\nTime : ${(timeout / 1000).toFixed(2)} Seconds\nBonus : ${poin} XP`
    conn.tebakanime[id] = [
      await conn.sendFile(m.chat, json.image, 'tebakanime.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakanime[id]) conn.reply(m.chat, `Time Out!\nThe answer is ${json.name}\n\nUrl : ${json.url}\nDesk :\n${json.desc}`, conn.tebakanime[id][0])
        delete conn.tebakanime[id]
      }, timeout)
    ]
  }
handler.help = ['haigusha']
handler.tags = ['game']
handler.command = /^haigusha$/i

module.exports = handler
