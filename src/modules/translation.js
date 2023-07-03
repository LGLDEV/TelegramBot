
module.exports = function(lang='uz', key, userId) {
    const dictionary = {
        welcome: {
            "ru": `Это ваша личная ссылка:\n\nhttps://t.me/ParserXBot?start=${userId}\n\nОбщайтесь анонимно!`,
            "uz": `Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/ParserXBot?start=${userId}\n\nUlashish orqali anonim suhbat quring!`
        }
    }
    return dictionary[key][lang]
}