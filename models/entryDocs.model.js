const { Schema, model, Types } = require("mongoose");

const EntryDocsSchema = new Schema({	
	fio: {
		type: Types.ObjectId,
		ref: "Students",
	},
	form: {
		type: String,
		required: true,
		default: "Ссылка",
	},
	testRes: {
		type: String,
		requred: true,
		default: "Ссылка",
	},
});

module.exports = model("EntryDocs", EntryDocsSchema);