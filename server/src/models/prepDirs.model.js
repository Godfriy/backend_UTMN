const { Schema, model, Types } = require("mongoose");

const PrepDirsSchema = new Schema({
	title: {
		type: String,
		requred: true,
	},
	dirCode: {
		type: String,
		requred: true,
	},
	fgos: {
		type: String,
		required: true,
	},
	profile: {
		type: String,
		required: true,
	},
});

module.exports = model("PrepDirs", PrepDirsSchema);