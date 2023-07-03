const dbClient = require('../modules/database');
const fowardMarkup = require("../markups/fowardMarkup");

module.exports = class StartHandler {
    bot = null;
    constructor(bot) {
        this.bot = bot;
    }

    handle() {
        this.bot.start(async ctx => {
            const userId = ctx.from.id
            const condidate = await dbClient.findUser(userId);
            const id = ctx.message.text.split(' ')[1]
            if (!id) {
                if (!condidate) {
                    await dbClient.addUser(userId)
                    return await ctx.replyWithHTML(`<b>Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/ParserXBot?start=${ctx.chat.id}\n\nUlashish orqali anonim suhbat quring!</b>`, {...fowardMarkup});
                } else {
                    await ctx.replyWithHTML(`<b>Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/ParserXBot?start=${ctx.chat.id}\n\nUlashish orqali anonim suhbat quring!</b>`, {...fowardMarkup});
                }
            }else {
                if(!condidate) {await dbClient.addUser(userId)}
                return ctx.scene.enter('anonim')
            }


        })
    }
}

