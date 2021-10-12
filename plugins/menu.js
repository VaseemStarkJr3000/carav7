let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
👋🏻 *Hey there its cara here at your service* ♾️

You can support me by subscribing my channel 
Link - https://youtube.com/channel/UCIA_gt6ns4hu6k-WQOPRoNQ

⚠️ _If you want to add me or join the official group  then contact my owner http://wa.me/919832361550_

*― ⌞ 🄱🄾🅃 ⌝ ―*

```help, mod, ban, unban, join, bc, bcgc, grouplist, here, inspect, delete, ping```

*― ⌞ 🅄🅃🄸🄻🅂 ⌝ ―*

```sticker, nightcore, translate, tts, semoji, toimg2, kanji, togif, covid, ctrigger, trigger, readmore, nameninja, google, gimage, wiki, weather```

*― ⌞ 🄶🅁🄾🅄🄿 ⌝ ―*

```enable/disable, profile, groupinfo, setwelcome, remove, promote, demote, group open/close, hidetag, tagall, revock```

*― ⌞ 🅁🄴🄰🄲🅃🄸🄾🄽 ⌝ ―*

```punch, hug, kiss, slap, pat, cry```

*― ⌞ 🄰🄽🄸🄼🄴 ⌝ ―*

```waifu, husbu, neko, ameme, wallpaperanime, rpaper, anime, character, haigusha```

*― ⌞ 🄼🄴🄳🄸🄰 ⌝ ―*

```meme, yts, yta, play, spotify, pinterest, subreddit, wallpaperq, lyrics```

*If you see any bug feel free to report us by !bug/report <problem>*

©Cara from Quantum world ♾️
`.trim(), m)
}
handler.help = ['menu', 'help','list', '?']
handler.tags = ['main']
handler.command = /^(menu|help|cara|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

