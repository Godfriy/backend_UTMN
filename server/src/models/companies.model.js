const { Schema, model, Types } = require("mongoose");

const CompaniesSchema = new Schema({
	compName: {
		type: String,
		required: true,
	},
	legAddress: {
		type: String,
		required: true,
	},
	compEmail: {
		type: String,
	},
	compPhone: {
		type: String,
	},
});

module.exports = model("Companies", CompaniesSchema);