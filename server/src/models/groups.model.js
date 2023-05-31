const { Schema, model, Types } = require("mongoose");

const GroupsSchema = new Schema({
	groupName: {
		type: String,
		requred: true,
	},
	prepDir: {
		type: Types.ObjectId,
		ref: "PrepDirs",
	},
	entryYear: {
		type: Number,
	},
});

module.exports = model("Groups", GroupsSchema);