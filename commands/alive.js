const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*🤖 ᴢᴜᴋᴀ ᴀɪ ɪs ᴀᴄᴛɪᴠᴇ!*\n\n` +
                       `*ᴠᴇʀsɪᴏɴ:* ${settings.version}\n` +
                       `*sᴛᴀᴛᴜs:* Online\n` +
                       `*ᴍᴏᴅᴇ:* Public\n\n` +
                       `*🌟 ғᴇᴀᴛᴜʀᴇs:*\n` +
                       `• ɢʀᴏᴜᴘ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ\n` +
                       `• ᴀɴᴛɪʟɪɴᴋ ᴘʀᴏᴛᴇᴄᴛɪᴏɴ\n` +
                       `• ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs\n` +
                       `• ᴀɴᴅ ᴍᴏʀᴇ!\n\n` +
                       `ᴛʏᴘᴇ *.ᴍᴇɴᴜ* ғᴏʀ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419125195694@newsletter',
                    newsletterName: 'ᴢᴜᴋᴀ ᴀɪ',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;