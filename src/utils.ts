import TelegramBot from "node-telegram-bot-api";
import { WANTED_RIGHTS } from "./constants";

export const ensureDefaultRights = async (bot: TelegramBot) => {
    const currentRights = await bot.getMyDefaultAdministratorRights({
        for_channels: false,
    });

    const hasCorrectRight = Object.entries(WANTED_RIGHTS).every(
        ([right, value]) =>
            currentRights[right as keyof TelegramBot.ChatAdministratorRights] ===
            value,
    );

    if (hasCorrectRight) {
        return;
    };

    console.info(
        "[rights] Updating default adming rights to ensure proper functionality",
    );
    const success = await bot.setMyDefaultAdministratorRights({
        for_channels: false,
        rights: WANTED_RIGHTS,
    });

    if (success) {
    console.info("[rights] Default admin rights updated successfully");
  } else {
    console.warn(
      "[rights] Failed to update default admin rights, the bot may not function correctly in new chats",
    );
  }
};
