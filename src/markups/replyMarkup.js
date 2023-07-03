const { Markup } = require("telegraf");

const localMarkup = function (chat_id) {
    return new Markup.inlineKeyboard([
        Markup.button.callback('🔁 Javob yozish', `reply_${chat_id}`),
    ])
}

module.exports = localMarkup