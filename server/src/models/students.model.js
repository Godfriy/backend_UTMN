const { Schema, model, Types } = require("mongoose");

const StudentsSchema = new Schema({
	fio: {
		type: String,
		required: true,
	},
	birthDate: {
		type: Date,
		required: true,
	},
	currAdd: {
		type: String,
	},
	phoneNum: {
		type: [String],
		default: undefined,
	},
	photo: {
		type: JSON,
	},
	email: {
		type: String,
	},
	status: {
		type: String,
		required: true,
	}
});
	
module.exports = model("Students", StudentsSchema);