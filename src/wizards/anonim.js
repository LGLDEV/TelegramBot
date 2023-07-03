const {Composer, Scenes} = require('telegraf');
const replyMarkup = require('../markups/replyMarkup');
const fowardMarkup = require('../markups/fowardMarkup');

const startWizard = new Composer();
const getMessage = new Composer();


startWizard.on('text', async ctx => {
    ctx.wizard.state.id = ctx.message.text.split(' ')[1];
    await ctx.replyWithHTML("<b>Murojatingizni shuyerga yozing!</b>")
    return ctx.wizard.next()
})

getMessage.on('text', async ctx => {
    await ctx.telegram.sendMessage(ctx.wizard.state.id, ctx.message.text, {...replyMarkup(ctx.chat.id)})
    await ctx.replyWithHTML("<b>Murojatingiz yuborildi ✅</b>")
    await ctx.replyWithHTML(`<b>Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/ParserXBot?start=${ctx.chat.id}\n\nUlashish orqali anonim suhbat quring!</b>`, {...fowardMarkup});
    return ctx.scene.leave();
})

const anonimWizard = new Scenes.WizardScene('anonim', startWizard, getMessage)

module.exports = anonimWizard;