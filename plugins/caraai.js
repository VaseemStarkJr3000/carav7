const axios = require('axios')




let handler = async (m, { conn, args  , usedPrefix, command })=>{


if(!args[0]) throw " please provide sentaince"
  
    try{

        const response = axios.get(`http://api.brainshop.ai/get?bid=159811&key=S1IFzsWHWPjwi9ah&uid=[uid]&msg=${args[0]}`)
        const res = await response
        
        const name = res.data.cnt
 

        conn.reply(m.chat,`
       ${cnt}
        `.trim(),m)
    }catch((){
throw 'reply not found' 
console.log(e)

    }




}

handler.help = ['cara']
handler.tags = ['internet']
handler.command = /^(cara|bot)$/i

module.exports = handler
