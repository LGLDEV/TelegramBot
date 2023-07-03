const {Composer, Scenes} = require('telegraf');
const replyMarkup = require('../markups/replyMarkup');
const fowardMarkup = require('../markups/fowardMarkup');

const startWizard = new Composer();
const replyMessage = new Composer();


startWizard.on('callback_query', async query => {
    const callData = query.callbackQuery.data
    query.wizard.state.id = callData.split('_')[1]
    await query.replyWithHTML("<b>Javobingizni shu yerga yozing!</b>")
    return query.wizard.next()
})

replyMessage.on('text', async ctx => {
    await ctx.telegram.sendMessage(ctx.wizard.state.id, ctx.message.text)
    await ctx.replyWithHTML("<b>Javobingiz yuborildi ✅</b>")
    await ctx.replyWithHTML(`<b>Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/ParserXBot?start=${ctx.chat.id}\n\nUlashish orqali anonim suhbat quring!</b>`, {...fowardMarkup});
    return ctx.scene.leave();
})

const replyWizard = new Scenes.WizardScene('reply', startWizard, replyMessage)

module.exports = replyWizard;