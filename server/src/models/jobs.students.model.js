const { Schema, model, Types } = require("mongoose");

const StudentJobsSchema = new Schema({
	studentId: {
		type: Types.ObjectId,
		ref: 'Students',
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
	},
	post: {
		type: String,
	},
	companyId: {
		type: Types.ObjectId,
		ref: 'Companies',
		required: true,
	},
});

module.exports = model("StudentJobs", StudentJobsSchema);