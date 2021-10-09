let handler = async(m, { conn }) => {

    if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
    if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
  
 const data = ["https://tenor.com/bCh3q.gif","https://tenor.com/bCh3q.gif"]
  const HUG = data[Math.floor(Math.random() * data.length)]

  conn.sendFile(m.chat,HUG,'h.gif'`,m,false,
  { mimetype :'video/gif',  contextInfo :{mentionedJid : [  ...m.mentionedJid,m.sender ] }})
  

}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^coinflip$/i

module.exports = handler
