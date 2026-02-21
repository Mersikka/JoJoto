import TelegramBot from 'node-telegram-bot-api';
import dedent from 'dedent';

import {
    ensureDefaultRights,
} from './src/utils';
import {
    TOKEN,
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
    if (Math.random() < 0.9) {
        bot.sendMessage(msg.chat.id, 'MISSÄ ON JJ!?')
    }
})
