const axios = require('axios')




let handler = async (m, { conn, args  , usedPrefix, command })=>{


if(!args[0]) throw " please provide any word or sentence"
  
    try{

        const response = axios.get(`https://api.brainshop.ai/get?bid=159811&key=S1IFzsWHWPjwi9ah&uid=[uid]&msg=${args[0]}`)
        const res = await response
        
        const name = res.data.cnt
        

        conn.reply(m.chat,`
        🌸 BOT: ${name} `.trim(),m)
    }catch(e){
throw 'Reply not found' 
console.log(e)

    }




}

handler.help = ['cara']
handler.tags = ['internet']
handler.command = /^(cara|bot)$/i

module.exports = handler
