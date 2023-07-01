const { Markup } = require("telegraf")

module.exports = function(lang) {
    buttons = []
    if(lang == 'uz') {
        buttons.push([Markup.button.url('Ulashish 📬', `https://t.me/share/url?url=https://t.me/${process.env.BOT_NAME}`)])
    }else if(lang == 'ru'){
        buttons.push([Markup.button.switchToChat('Отправка 📬', `https://t.me/share/url?url=https://t.me/${process.env.BOT_NAME}`)])
    }
    const markup = Markup.inlineKeyboard(buttons)
    return markup
}