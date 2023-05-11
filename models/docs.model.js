const { Schema, model, Types } = require("mongoose");

const DocsSchema = new Schema({
	fio: {
		type: Types.ObjectId,
		ref: "Students",
	},
	docType: {
		type: String,
		required: true,
	},
	docNum: {
		type: String,
		required: true,
	},
	docLink: {
		type: String,
		required: true,
		default: "Ссылка",
	},
});

module.exports = model("Docs", DocsSchema);