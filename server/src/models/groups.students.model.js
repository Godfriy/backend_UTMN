const { Schema, model, Types } = require("mongoose");

const StudentGroupsSchema = new Schema({
	studentId: {
		type: Types.ObjectId,
		ref: "Students",
		required: true,
	},
	groupId: {
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