const { Schema, model, Types } = require("mongoose");

const DocsSchema = new Schema({
	studentId: {
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
	docScan: {
		type: JSON,
	},
});

module.exports = model("Docs", DocsSchema);