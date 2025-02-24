import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.token, { polling : true})

bot.onText('nya', (msg) => {
    const text = "uwu"
        bot.sendMessage(msg.chat.id, text, { reply_to_message_id: msg.message_id})
  })
