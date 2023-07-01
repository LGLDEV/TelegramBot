const { Markup } = require("telegraf");

const localMarkup = new Markup.inlineKeyboard([
    Markup.button.callback('🇺🇿 Uz', 'uz'),
    Markup.button.callback('🇷🇺 Ru', 'ru')
])

module.exports = localMarkup