const prisma = require("./prisma");

const DataBase =  class DataBase{
    client = null;
    constructor(prisma) {
        this.client = prisma;
    }

    async findUser(user_id) {
        return await this.client.user.findUnique({
            where: {
                user_id: user_id
            }
        });
    }

    async addUser(user_id) {
        return await this.client.user.create({data: {user_id: user_id}})
    }

    async setLang(user_id,lang) {
        return await this.client.user.update({where: {user_id: user_id}, data: {lang: lang}})
    }

    async getLang(user_id) {
        const user = await this.client.user.findUnique({
            where: {
                user_id: user_id
            }
        });
        return user.lang
    }
}

module.exports = new DataBase(prisma)