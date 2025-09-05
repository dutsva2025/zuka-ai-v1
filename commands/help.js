const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
   *🤖 ${settings.botName || 'ᴢᴜᴋᴀ ᴀɪ ᴠ1'}*  
   ᴠᴇʀsɪᴏɴ: *${settings.version || '1.0.0'}*
   ʙʏ *${settings.botOwner || 'ᴢᴜᴋᴀ'}*

    *ɢᴇɴᴇʀᴀʟ*
 🚀.ʜᴇʟᴘ ᴏʀ .ᴍᴇɴᴜ
 🚀.ᴘɪɴɢ
 🚀.ᴀʟɪᴠᴇ
 🚀.ᴛᴛs <ᴛᴇxᴛ>
 🚀.ᴏᴡɴᴇʀ
 🚀.ᴊᴏᴋᴇ
 🚀.ǫᴜᴏᴛᴇ
 🚀.ғᴀᴄᴛ
 🚀.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>
 🚀.ɴᴇᴡs
 🚀.ᴀᴛᴛᴘ <ᴛᴇxᴛ>
 🚀.ʟʏʀɪᴄs <sᴏɴɢ_ᴛɪᴛʟᴇ>
 🚀.8ʙᴀʟʟ <ǫᴜᴇsᴛɪᴏɴ>
 🚀.ɢʀᴏᴜᴘɪɴғᴏ
 🚀.sᴛᴀғғ ᴏʀ .ᴀᴅᴍɪɴs 
 🚀.ᴠᴠ
 🚀.ᴛʀᴛ <ᴛᴇxᴛ> <ʟᴀɴɢ>
 🚀.ss <ʟɪɴᴋ>
 🚀.ᴊɪᴅ


    *ᴀᴅᴍɪɴ*
 👮.ʙᴀɴ @ᴜsᴇʀ
 👮.ᴘʀᴏᴍᴏᴛᴇ @ᴜsᴇʀ
 👮.ᴅᴇᴍᴏᴛᴇ @ᴜsᴇʀ
 👮.ᴍᴜᴛᴇ <ᴍɪɴᴜᴛᴇs>
 👮.ᴜɴᴍᴜᴛᴇ
 👮.ᴅᴇʟᴇᴛᴇ ᴏʀ .ᴅᴇʟ
 👮.ᴋɪᴄᴋ @ᴜsᴇʀ
 👮.ᴡᴀʀɴɪɴɢs @ᴜsᴇʀ
 👮.ᴡᴀʀɴ @ᴜsᴇʀ
 👮.ᴀɴᴛɪʟɪɴᴋ
 👮.ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
 👮.ᴄʟᴇᴀʀ
 👮.ᴛᴀɢ <ᴍᴇssᴀɢᴇ>
 👮.ᴛᴀɢᴀʟʟ
 👮.ᴄʜᴀᴛʙᴏᴛ
 👮.ʀᴇsᴇᴛʟɪɴᴋ
 👮.ᴀɴᴛɪᴛᴀɢ <ᴏɴ/ᴏғғ>
 👮.ᴡᴇʟᴄᴏᴍᴇ <ᴏɴ/ᴏғғ>
 👮.ɢᴏᴏᴅʙʏᴇ <ᴏɴ/ᴏғғ>


   *ᴏᴡɴᴇʀ*
 🔒.ᴍᴏᴅᴇ
 🔒.ᴀᴜᴛᴏsᴛᴀᴛᴜs
 🔒.ᴄʟᴇᴀʀsᴇssɪᴏɴ
 🔒.ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
 🔒.ᴄʟᴇᴀʀᴛᴍᴘ
 🔒.ᴜᴘᴅᴀᴛᴇ
 🔒.sᴇᴛᴘᴘ <ʀᴇᴘʟʏ to image>
 🔒.ᴀᴜᴛᴏʀᴇᴀᴄᴛ
 🔒.ᴀᴜᴛᴏᴛʏᴘɪɴɢ <ᴏɴ/ᴏғғ>
 🔒.ᴀᴜᴛᴏʀᴇᴀᴅ <ᴏɴ/ᴏғғ>


   *ɪᴍᴀɢᴇ ᴀɴᴅ sᴛɪᴄᴋᴇʀ*
 📷.ʙʟᴜʀ <ɪᴍᴀɢᴇ>
 📷.sɪᴍᴀɢᴇ <ʀᴇᴘʟʏ ᴛᴏ sᴛɪᴄᴋᴇʀ>
 📷.sᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ᴛᴏ ɪᴍᴀɢᴇ>
 📷.ʀᴇᴍᴏᴠᴇʙɢ
 📷.ʀᴇᴍɪɴɪ
 📷.ᴄʀᴏᴘ <ʀᴇᴘʟʏ ᴛᴏ ɪᴍᴀɢᴇ>
 📷.ᴛɢsᴛɪᴄᴋᴇʀ <ʟɪɴᴋ>
 📷.ᴍᴇᴍᴇ
 📷.ᴛᴀᴋᴇ <ᴘᴀᴄᴋɴᴀᴍᴇ> 
 📷.ᴇᴍᴏᴊɪᴍɪx <ᴇᴍᴊ1>+<ᴇᴍᴊ2>


    *ᴘɪᴇs*
 🌟.ᴘɪᴇs <ᴄᴏᴜɴᴛʀʏ>
 🌟.ᴄʜɪɴᴀ 
 🌟.ɪɴᴅᴏɴᴇsɪᴀ 
 🌟.ᴊᴀᴘᴀɴ 
 🌟.ᴋᴏʀᴇᴀ 
 🌟.ʜɪᴊᴀʙ


    *ɢᴀᴍᴇs*
 🎮.ᴛɪᴄᴛᴀᴄᴛᴏᴇ @ᴜsᴇʀ
 🎮.ʜᴀɴɢᴍᴀɴ
 🎮.ɢᴜᴇss <ʟᴇᴛᴛᴇʀ>
 🎮.ᴛʀɪᴠɪᴀ
 🎮.ᴀɴsᴡᴇʀ <ᴀɴsᴡᴇʀ>
 🎮.ᴛʀᴜᴛʜ
 🎮.ᴅᴀʀᴇ


     *ᴀɪ*
 🤖.ɢᴘᴛ <ǫᴜᴇsᴛɪᴏɴ>
 🤖.ɢᴇᴍɪɴɪ <ǫᴜᴇsᴛɪᴏɴ>
 🤖.ɪᴍᴀɢɪɴᴇ <ᴘʀᴏᴍᴘᴛ>
 🤖.ғʟᴜx <ᴘʀᴏᴍᴘᴛ>


     *ғᴜɴ*
 🎉.ᴄᴏᴍᴘʟɪᴍᴇɴᴛ @ᴜsᴇʀ
 🎉.ɪɴsᴜʟᴛ @ᴜsᴇʀ
 🎉.ғʟɪʀᴛ 
 🎉.sʜᴀʏᴀʀɪ
 🎉.ɢᴏᴏᴅɴɪɢʜᴛ
 🎉.ʀᴏsᴇᴅᴀʏ
 🎉.ᴄʜᴀʀᴀᴄᴛᴇʀ @ᴜsᴇʀ
 🎉.ᴡᴀsᴛᴇᴅ @ᴜsᴇʀ
 🎉.sʜɪᴘ @ᴜsᴇʀ
 🎉.sɪᴍᴘ @ᴜsᴇʀ
 🎉.sᴛᴜᴘɪᴅ @ᴜsᴇʀ [ᴛᴇxᴛ]


     *ᴛᴇxᴛᴍᴀᴋᴇʀ*
 🔤.ᴍᴇᴛᴀʟʟɪᴄ <ᴛᴇxᴛ>
 🔤.ɪᴄᴇ <ᴛᴇxᴛ>
 🔤.sɴᴏᴡ <ᴛᴇxᴛ>
 🔤.ɪᴍᴘʀᴇssɪᴠᴇ <ᴛᴇxᴛ>
 🔤.ᴍᴀᴛʀɪx <ᴛᴇxᴛ>
 🔤.ʟɪɢʜᴛ <ᴛᴇxᴛ>
 🔤.ɴᴇᴏɴ <ᴛᴇxᴛ>
 🔤.ᴅᴇᴠɪʟ <ᴛᴇxᴛ>
 🔤.ᴘᴜʀᴘʟᴇ <ᴛᴇxᴛ>
 🔤.ᴛʜᴜɴᴅᴇʀ <ᴛᴇxᴛ>
 🔤.ʟᴇᴀᴠᴇs <ᴛᴇxᴛ>
 🔤.1917 <ᴛᴇxᴛ>
 🔤.ᴀʀᴇɴᴀ <ᴛᴇxᴛ>
 🔤.ʜᴀᴄᴋᴇʀ <ᴛᴇxᴛ>
 🔤.sᴀɴᴅ <ᴛᴇxᴛ>
 🔤.ʙʟᴀᴄᴋᴘɪɴᴋ <ᴛᴇxᴛ>
 🔤.ɢʟɪᴛᴄʜ <ᴛᴇxᴛ>
 🔤.ғɪʀᴇ <ᴛᴇxᴛ>


   *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
 💻.ᴘʟᴀʏ <sᴏɴɢ_ɴᴀᴍᴇ>
 💻.sᴏɴɢ <sᴏɴɢ_ɴᴀᴍᴇ>
 💻.ɪɴsᴛᴀɢʀᴀᴍ <ʟɪɴᴋ>
 💻.ғᴀᴄᴇʙᴏᴏᴋ <ʟɪɴᴋ>
 💻.ᴛɪᴋᴛᴏᴋ <ʟɪɴᴋ>
 💻.ᴠɪᴅᴇᴏ <sᴏɴɢ ɴᴀᴍᴇ>
 💻.ʏᴛᴍᴘ4 <ʟɪɴᴋ>


    *ᴍɪsᴄ*
 🧩.ʜᴇᴀʀᴛ
 🧩.ʜᴏʀɴʏ
 🧩.ᴄɪʀᴄʟᴇ
 🧩.ʟɢʙᴛ
 🧩.ʟᴏʟɪᴄᴇ
 🧩.ɪᴛs-sᴏ-sᴛᴜᴘɪᴅ
 🧩.ɴᴀᴍᴇᴄᴀʀᴅ 
 🧩.ᴏᴏɢᴡᴀʏ
 🧩.ᴛᴡᴇᴇᴛ
 🧩.ʏᴛᴄᴏᴍᴍᴇɴᴛ 
 🧩.ᴄᴏᴍʀᴀᴅᴇ 
 🧩.ɢᴀʏ 
 🧩.ɢʟᴀss 
 🧩.ᴊᴀɪʟ 
 🧩.ᴘᴀssᴇᴅ 
 🧩.ᴛʀɪɢɢᴇʀᴇᴅ


  *ᴀɴɪᴍᴇ*
 🐉.ɴᴇᴋᴏ
 🐉.ᴡᴀɪғᴜ
 🐉.ʟᴏʟɪ
 🐉.ɴᴏᴍ 
 🐉.ᴘᴏᴋᴇ 
 🐉.ᴄʀʏ 
 🐉.ᴋɪss 
 🐉.ᴘᴀᴛ 
 🐉.ʜᴜɢ 
 🐉.ᴡɪɴᴋ 
 🐉.ғᴀᴄᴇᴘᴀʟᴍ 


  *ɢɪᴛʜᴜʙ*
 🌐.ɢɪᴛ
 🌐.ɢɪᴛʜᴜʙ
 🌐.sᴄ
 🌐.sᴄʀɪᴘᴛ
 🌐.ʀᴇᴘᴏ


*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴜᴋᴀ*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419125195694@newsletter',
                        newsletterName: 'ᴢᴜᴋᴀ ᴀɪ',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419125195694@newsletter',
                        newsletterName: 'ᴢᴜᴋᴀ ᴀɪ',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
