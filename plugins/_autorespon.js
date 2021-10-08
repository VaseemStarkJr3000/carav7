let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'Eva is not active' : banned ? 'you are banned' : 'Eva here',
                '© Cara',
                isBanned ? 'Unban' : banned ? 'Bot rules' : 'Menu',
                isBanned ? '.unban' : banned ? '!rules' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Support',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '!rules', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Open this link')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `┌〔 Invite Bots to Group 〕

🎗 *Cara.note* 🎗
_If you want to add the bot then contact the owner_ ✨  wa.me/919832361550  *{prefix- !}*

Here is the official group link 
https://chat.whatsapp.com/ImEZ4eg3YPHK6XvHcNJo7O

`.trim(), '© Cara', 'Bot Owner', ',owner', m)
    }


    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Active during ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Group Only' : 'Public'} | Cara from Quantum world`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
