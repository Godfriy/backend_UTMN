const { Schema, model, Types } = require("mongoose");

const StudentGroupsSchema = new Schema({
	fio: {
		type: Types.ObjectId,
		ref: "Students",
		required: true,
	},
	groupName: {
		type: Types.ObjectId,
		ref: "Groups",
		required: true,
	},
	entryDate: {
		type: Date,
		required: true,
	}
});

module.exports = model("StudentGroups", StudentGroupsSchema);