import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `-`, `Dims995@gmail.com`, `Japanese`, `https://youtube.com/@DimsT1945`, `👤 Owner Nino-Chan`],
  ], fkontak)
  /*const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })*/
let caption = `👋 Hai *@${who.split("@")[0]}*, Itu ownerku jangan spam ya kak >,<`
    await conn.sendButton(m.chat, caption, author, null, [['Sapa Owner', 'bilek']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
 wm, contacts: [{ vcard }] }}, { quoted: fkontak })*/
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['👨Sapa Owner', 'bilek']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
