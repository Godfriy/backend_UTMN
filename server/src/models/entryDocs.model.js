const { Schema, model, Types } = require("mongoose");

const EntryDocsSchema = new Schema({	
	studentId: {
		type: Types.ObjectId,
		ref: "Students",
	},
	form: {
		type: JSON,
	},
	testRes: {
		type: Number,
		requred: true,
	},
});

module.exports = model("EntryDocs", EntryDocsSchema);