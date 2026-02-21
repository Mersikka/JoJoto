import TelegramBot from 'node-telegram-bot-api';
import dedent from 'dedent';

import {
    ensureDefaultRights,
} from './src/utils';
import {
    TOKEN,
    GROUP_IDS,
} from './src/constants';

console.info(`[🧑‍🚀] Starting JoJoto`);
console.info(`
🤤 JJ 🤤
`);

if (!TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN environment variable is not set");
} else {
    console.info(`[🔑 token] Using bot token: ${TOKEN.substring(0, 2)}...`)
}

const bot = new TelegramBot(TOKEN, {
    polling: {
        params: {
            allowed_updates: ["message"],
        },
    },
});

const botUser = await bot.getMe();

console.info(`[🚀 started] ${botUser.username} (${botUser.id})`);

await ensureDefaultRights(bot);

bot.on('message', (msg) => {

    // Check if message in DMs or in allowed chats, otherwise return
    if (msg.chat.id !== msg.from?.id && !GROUP_IDS?.includes(msg.chat.id.toString())) {
        console.info(`[log] Rejected message from group "${msg.chat.title}", id "${msg.chat.id}"`)
        return
    };


    const text = msg.text?.toString();
    if (text) {
        console.info(`[log] Received message: "${text}"`);
    }

    if (text?.toString().toLowerCase().includes('jj')) {
        bot.sendMessage(msg.chat.id, 'MISSÄ ON JJ!?');
    }
})
