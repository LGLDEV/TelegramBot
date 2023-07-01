const { Telegraf } = require("telegraf");
const StartHandler = require("../handlers/start");
const HelpHandler = require("../handlers/help");
const LangHandler = require("../handlers/lang");



module.exports = class Bot {
    token = "";
    bot = null;
    handlers = []
    constructor(token) {
        this.token = token;
        this.bot = new Telegraf(token)
    }

    init() {
        this.handlers = [
            new StartHandler(this.bot),
            new HelpHandler(this.bot),
            new LangHandler(this.bot),
        ];
        for (const handler of this.handlers) {
            handler.handle()
        }
        this.bot.launch({
            allowedUpdates: ['message', 'callback_query'],
        })
        console.log('> Bot running')
    }
};