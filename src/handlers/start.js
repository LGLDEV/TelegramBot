const localMarkup = require("../markups/localMarkup");
const prisma = require("../modules/prisma");

module.exports = class StartHandler {
    bot = null;
    constructor(bot) {
        this.bot = bot;
    }

    handle () {
        this.bot.start(async ctx => {
            const condidate = await knex.select('*').from('users').where({user_id: ctx.chat.id});
            console.log(condidate);
            return ctx.replyWithHTML('<b>🇺🇿 Salom, tilni tanlang\n\n🇷🇺 Привет, выберите язык</b>', {...localMarkup});
        })
    }
}