const dictionary = {
    ru: {
        "Bu sizning shaxsiy havolangiz:\n\nhttps://t.me/ParseXBot?start=6026672b573\n\nUlashish orqali anonim suhbat quring!": "Это ваша личная ссылка:\n\nhttps://t.me/ParseXBot?start=6026672b573\n\nОбщайтесь анонимно!"
    }
}

module.exports = function(lang='uz', text) {
    if(lang == 'uz') {return text}
    return dictionary[lang][text]
}