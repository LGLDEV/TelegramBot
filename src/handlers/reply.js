


module.exports = class ReplyHandler {
    bot = null;
    constructor(bot) {
        this.bot = bot;
    }

    handle() {
        this.bot.on('callback_query', async query => {
            const callData = query.callbackQuery.data
            if(callData.includes('reply_')){
                return query.scene.enter('reply')
            }
        })
    }
}