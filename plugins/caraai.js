const axios = require('axios')




let handler = async (m, { conn, args  , usedPrefix, command })=>{


if(!args[0]) throw " please provide place or location name"
  
    try{

        const response = axios.get(`http://api.brainshop.ai/get?bid=159811&key=S1IFzsWHWPjwi9ah&uid=[uid]&msg=${args[0]}`)
        const res = await response
        
        const name = res.data.cnt
        const Country = res.data.sys.country
        const Weather= res.data.weather[0].description
        const Temperature = res.data.main.temp + '°C'
        const Minimum_Temperature= res.data.main.temp_min + '°C'
        const Maximum_Temperature= res.data.main.temp_max + '°C'
        const Humidity= res.data.main.humidity + '%'
        const Wind= res.data.wind.speed + 'km/h'
        

        conn.reply(m.chat,`
        🌸 Place: ${name}\n💮 Country: ${cnt}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}
        `.trim(),m)
    }catch(e){
throw 'location not found' 
console.log(e)

    }




}

handler.help = ['cara']
handler.tags = ['internet']
handler.command = /^(cara|bot)$/i

module.exports = handler
