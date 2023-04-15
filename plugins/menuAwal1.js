
//Fix Buttonmassage By PutraModz\\

import fetch from 'node-fetch'
import fs from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
m.reply(wait)
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let ameliamd = "https://telegra.ph/file/c9e313213cc078eaed806.jpg"
    let name = await conn.getName(who)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     
  let putra = `
  
➥ 「 *Info User* 」
  ❏ 𝐍𝐚𝗺𝐚 : ${name}
  ❏ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${who.premiumTime > 0 ? 'Premium' : 'Free'}
  ❏ L𝐢𝗺𝐢𝐭 : ${limit}
  ❏ S𝐚𝐥𝐝𝗼 : R𝐩 ${money}
  ❏ 𝐄𝐱𝐩 : ${exp}
  ❏ 𝐑𝗼𝐥𝐞 : ${role}
  ❏ 𝐀𝐠𝐞 : ${age}

➥ 「 *Info Bot* 」
  ❏ M𝗼𝐝𝐞 : Public
  ❏ 𝐓𝐢𝗺𝐞 : ${time} ﹙ɢᴍᴛ +5:30﹚
  ❏ 𝐃𝐚𝐭𝐞 : ${date}
  ❏ 𝐓𝗼𝐭𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 : ${totalf.length}
  ❏ 𝐔𝐬𝐞𝐫 𝐁𝐚𝐧𝐧𝐞𝐝 : ${users.length}

${global.cmenua}
  `
//SOUNDTRACK\\
/*let sound17 = "sound17"
let sound18 = "sound18"
let sound19 = "sound19"
let sound20 = "sound20"
let sound21 = "sound21"
let sound22 = "sound22"
let sound23 = "sound23"
let sound24 = "sound24"
let sound25 = "sound25"
let sound26 = "sound26"
let sound27 = "sound27"
let sound28 = "sound28"
let sound29 = "sound29"
let sound30 = "sound30"
let sound31 = "sound31"
let sound32 = "sound32"
let snd = `${pickRandom([sound17,sound18,sound19,sound20,sound21,sound22,sound23,sound24,sound25,sound26,sound27,sound28,sound29,sound30,sound31,sound32])}`
let audio = `https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/${snd}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'www.instagram.com/4c1f2r',
    mediaType: 2, 
    description: 'www.instagram.com/l4c1f2r',
    title: "Jangan Di Spam...",
    body: wm,
    thumbnail: await(await fetch(ameliamd)).buffer(),
    sourceUrl: 'www.instagram.com/l4c1f2r'
 	}
     }
    })
    */
conn.sendButton(m.chat, '┍┈༺ *Nakano Ninoラ* ༻', putra, ameliamd, [
                ['Owner', `${usedPrefix}owner`],
                ['Menu', `${usedPrefix}allmenu`],
                ['Sewa', `${usedPrefix}sewa`]
            ], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Jangan Di Spam',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
/*await conn.send2ButtonVid(m.chat, pp, cap, botdate, '𝐋𝐢𝐬𝐭𝐌𝐞𝐧𝐮', '.listmenu', '𝐃𝐚𝐬𝐛𝗼𝐚𝐫𝐝', '.db', m, adReply)*/
let vn = './mp3/purnama.mp3'
await conn.sendFile(m.chat, vn, 'menu.opus', null, m, true, {
type: 'audioMessage', 
ptt: true})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|testing|tesm)$/i
handler.register = false

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }nction pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }