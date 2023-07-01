const fowardMarkup = require("../markups/fowardMarkup");
const dbClient = require('../modules/database');
const translation = require("../modules/translation");


module.exports = class LangHandler {
    bot = null;
    constructor(bot) {
        this.bot = bot;
    }

    handle() {
        this.bot.on('callback_query', async query => {
            const chatId = query.from.id;
            const callData = query.callbackQuery.data
            const callMessageId = query.callbackQuery.message.message_id
            if(callData == 'uz' || callData == 'ru'){
                await dbClient.setLang(chatId, callData)
                const userLang = await dbClient.getLang(chatId)
                await query.telegram.deleteMessage(chatId, callMessageId)
                return query.replyWithHTML(`<b>${translation(userLang, "Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/QuestionUZ_Robot?start=6026672b573\n\nUlashish orqali anonim suhbat quring!")}</b>`, {...fowardMarkup(userLang)})
            }
        })
    }
}