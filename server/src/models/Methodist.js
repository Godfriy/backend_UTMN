const {Schema, model, Types} = require('mongoose')


const Methodist = new Schema({
    user: {type: Types.ObjectId, unique: true, ref: "User"},
})

module.exports = model('Methodist', Methodist)