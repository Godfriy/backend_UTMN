const {Schema, model} = require('mongoose')
const bcrypt = require("bcrypt");


const User = new Schema({
    login: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isMethodist: {type: Boolean}
})

User.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = model('User', User)