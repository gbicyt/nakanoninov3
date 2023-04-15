/*import { Configuration, OpenAIApi } from "openai"
var handler = async (m, { conn, usedPrefix, command, text }) => {
try {
            if (!text) return m.reply(`Chat dengan AI.\n\nContoh:\n${usedPrefix}${command} Halo? `);
            const configuration = new Configuration({
              apiKey: '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', // Create Your Key
            });                  // https://platform.openai.com/account/api-keys
            const openai = new OpenAIApi(configuration);

            const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          m.reply(`${response.data.choices[0].message.content}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
}
handler.command = /^(ai|openai)$/i
export default handler*/

import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
await m.reply('Searching...')
let putra = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
let hasil = await putra.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
export default handler