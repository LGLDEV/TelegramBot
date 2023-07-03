const fowardMarkup = require("../markups/fowardMarkup");
const dbClient = require('../modules/database');
const translation = require("../modules/translation");


module.exports = class ReplyHandler {
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
                return query.replyWithHTML(`<b>${translation(userLang, 'welcome', chatId)}</b>`, {...fowardMarkup(userLang)})
            }
        })
    }
}