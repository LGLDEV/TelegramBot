require('dotenv').config()
const Bot = require('./core/bot')


const app = new Bot(process.env.BOT_TOKEN)

app.init()