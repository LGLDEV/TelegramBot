const { Telegraf, session, Scenes } = require("telegraf");
const StartHandler = require("../handlers/start");
const HelpHandler = require("../handlers/help");
const ReplyHandler = require("../handlers/reply");
const anonimWizard = require("../wizards/anonim");



module.exports = class Bot {
    token = "";
    bot = null;
    handlers = [];
    stage = new Scenes.Stage([anonimWizard])
    constructor(token) {
        this.token = token;
        this.bot = new Telegraf(token)
        this.bot.use(session())
        this.bot.use(this.stage.middleware())

    }

    init() {
        this.handlers = [
            new StartHandler(this.bot),
            new HelpHandler(this.bot),
            new ReplyHandler(this.bot),
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