const { Markup } = require("telegraf")

const markup = Markup.inlineKeyboard([Markup.button.url('Ulashish 📬', `https://t.me/share/url?url=https://t.me/${process.env.BOT_NAME}`)])
module.exports = markup
