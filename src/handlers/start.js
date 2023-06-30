module.exports = class StartHandler {
    bot = null;
    constructor(bot) {
        this.bot = bot;
    }

    handle () {
        this.bot.start(async ctx => {
            return ctx.replyWithHTML('<b>Hello</b>')
        })
    }
}