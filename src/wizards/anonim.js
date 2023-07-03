const {Composer, Scenes} = require('telegraf');
const localMarkup = require('../markups/localMarkup');

const startWizard = new Composer();
const getMessage = new Composer();


startWizard.on('text', async ctx => {
    ctx.wizard.state.id = ctx.message.text.split(' ')[1];
    await ctx.replyWithHTML("<b>Murojaatingizni shuyerga yozing!</b>")
    console.log(ctx.wizard.state.id);
    return ctx.wizard.next()
})

getMessage.on('text', async ctx => {
    console.log(ctx.wizard.state.id);
    await ctx.telegram.sendMessage(ctx.wizard.state.id, ctx.message.text)
    await ctx.replyWithHTML("<b>Murojatingiz yuborildi</b>")
    await ctx.replyWithHTML(`<b>Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/ParserXBot?start=${ctx.chat.id}\n\nUlashish orqali anonim suhbat quring!</b>`);
    return ctx.scene.leave();
})

const anonimWizard = new Scenes.WizardScene('anonim', startWizard, getMessage)

module.exports = anonimWizard;