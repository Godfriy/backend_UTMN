const {Schema, model, Types} = require('mongoose')


const Role = new Schema({
    user: {type: Types.ObjectId, unique: true, ref: "User"},
})

module.exports = model('Role', Role)