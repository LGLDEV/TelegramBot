const { Telegraf } = require("telegraf");
const StartHandler = require("../handlers/start");
const HelpHandler = require("../handlers/help");



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
            new HelpHandler(this.bot)
        ];
        for (const handler of this.handlers) {
            handler.handle()
        }
        this.bot.launch()
        console.log('> Bot running')
    }
};