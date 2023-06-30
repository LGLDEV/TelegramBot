module.exports = class HelpHandler {
    bot = null;
    constructor(bot) {
        this.bot = bot;
    }

    handle () {
        this.bot.help(async ctx => {
            return ctx.replyWithHTML('<b>Help Command</b>')
        })
    }
}