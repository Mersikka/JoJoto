import type TelegramBot from "node-telegram-bot-api";

export const TOKEN = Bun.env.TELEGRAM_BOT_TOKEN;

export const WANTED_RIGHTS: TelegramBot.ChatAdministratorRights = {
    is_anonymous: false,
    can_manage_chat: true,
    can_delete_messages: true,
    can_manage_video_chats: false,
    can_restrict_members: true,
    can_promote_members: false,
    can_change_info: false,
    can_invite_users: false,
    can_post_stories: false,
    can_edit_stories: false,
    can_delete_stories: false,
    can_pin_messages: true,
};
