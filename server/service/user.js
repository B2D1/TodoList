const userModel = require('../db/models/user');

class UserService {
    async addUser(usr, psd) {
        const user = new userModel({
            usr,
            psd,
        });
        try {
            const data = await user.save();
            return data;
        } catch (error) {
            throw new Error('save failed');
        }
    }
    async validUser(usr, psd) {
        try {
            const user = await userModel.findOne({
                usr,
                psd,
            });
            return user;
        } catch (error) {}
    }
}

module.exports = UserService;
