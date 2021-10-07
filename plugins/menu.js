let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
👋 *Hello*, *I am Cara I am here to help you* 💐

•prefix !

━━❰･Bot🤖Side･❱━━

•help
*Info*: Get the command list 

•mod
*Info*: Get the owner's number 

•daily
*Info*: Get xp 

•leaderbord
*Info*: Show you the highest xp and level person 

•ban 
*Info*: Ban user

•unban
*Info*: Unban ban user

•join <link>
*Info*: Join the group 

•bc
*Info*: Broadcast in every group 

•grouplist
*Info*: Get the list of the groups where bot is running

•here
*Info*: Get the online members list in group 

•delete
*Info*: Delete the text or media send by bot

•levelup
*Info*: Increase your level 

•ping
*Info*: Get the info about the bot speed

•bug
*Info*: Sent report to the owner 

•tictactoe @user
*Info*: Start ttt game with the user

•rules
*Info*: Get the rules of the bot


━━❰･Bot🕹Utils･❱━━

•sticker 
*Info*: Convart img/vid in sticker 

•nightcore <tag the audio>
*Info*: Convart normal audio into nightcore audio

•translate <lang> <text>
*Info*: Translate text into given language 

•semoji <type> <emoji>
*Info*: Get an apple or Samsung or normal android syle emoji sticker

•toimg2
*Info*: Convart sticker into img

•kanji <text>
*Info*: Get kanji info

•togif
*Info*: Convart sticker into gif

•covid <country>
*Info*: Get info about covid condition in countries

•ctrigger <text>
*Info*: Create a custom triggered text
sticker

•readmore <text>|<text>
*Info*: Create two sentence into readmore form

•calc <expression>
Info : Get answer of your expression

•enable/disable <function>
*Info*: Enable antilink,welcome,autolevel,etc....

•Namaninja <text>
*Info*: Convart names into ninja names


━━❰･Bot🇯🇵Weeb･❱━━

•waifu
*Info*: Get random waifu image

•husbu 
*Info*: Get random husbu image 

•ameme 
*Info*: Get random anime meme

•anime <name>
*Info*: Get info about anime 

•manga <name>
*Info*: Get info about manga

•character <name>
*Info*: Get info about character 

•neko
*Info*: Get random neko img

•wallpaperanime
*Info*: Get random anime wallpaper 

• haigusha
*Info*: Random anima character will pop up and you have to guess the name after 60 sec the character info will expose 

• ameme
*Info*: Get random anime meme

━━❰･Bot🎐Group･❱━━

•profile 
*Info*: Display user info

•add 914556****
*Info*: Add the person in the group 

•kick @user
*Info*: Remove the user user from the group 

•promote @user
*Info*: Promote the user to admin 

•demote @user
*Info*: Demote the user from admin

•group open/close
*Info*: open or close the chats for public

•hidetag <text>
*Info*: Tag everyone present in the group

•revoke
*Info*: Reset the group link


━━❰･Bot🀄Media･❱━━

•pinterest <keyword>
*Info*: Get defined img from pinterest

•subreddit <keyword>
*Info*: Get img from subreddit

•wallpaperq <keyword>
*Info*: Get wallpaper 

•play <name>
*Info*: Sent the given specific song

•ytv <link>
*Info*: Sent the video 

•spotify <keywords>
*Info*: Download spotify songs

━━❰･Bot🎎Reaction･❱━━

•punch 
*Info*: Get a punch sticker 

•hug 
*Info*: Get a hug sticker 

•kiss
*Info*: Get a kiss sticker 

•slap
*Info*: Get a slap sticker

•pat
*Info*: Get a pat sticker 

•blush
*Info*: Get a blush sticker

•hug
*Info*: Get a hug sticker

•cry
*Info*: Get a cry sticker
  
*I hope you are enjoying the bot if you see any bug please report use by using !bug*








`.trim(), m)
}
handler.help = ['menu', 'help','list', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
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

