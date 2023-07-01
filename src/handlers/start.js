const localMarkup = require("../markups/localMarkup");
const dbClient = require('../modules/database');
const fowardMarkup = require("../markups/fowardMarkup");
const translation = require('../modules/translation')

module.exports = class StartHandler {
    bot = null;
    constructor(bot) {
        this.bot = bot;
    }

    handle() {
        this.bot.start(async ctx => {
            const userId = ctx.from.id
            const condidate = await dbClient.findUser(userId);
            if(!condidate){ 
                await dbClient.addUser(userId)
                return ctx.replyWithHTML('<b>🇺🇿 Salom, tilni tanlang\n\n🇷🇺 Привет, выберите язык</b>', { ...localMarkup });
            }
            else {
                const userLang = await dbClient.getLang(userId)
                return ctx.replyWithHTML(`<b>${translation(userLang, "Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/ParseXBot?start=6026672b573\n\nUlashish orqali anonim suhbat quring!")}</b>`, {...fowardMarkup(userLang)})
            }
        })
    }
}

