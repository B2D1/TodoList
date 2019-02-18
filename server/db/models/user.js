const mongoose = require('mongoose');
const userSchema = require('../schemas/user');

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;