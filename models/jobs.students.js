const { Schema, model, Types } = require("mongoose");

const StudentJobsSchema = new Schema({
	fio: {
		type: String,
		required: true,
	},
	begDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
	},
	post: {
		type: String,
	},
	jobPlace: {
		type: String,
	},
});

module.exports = model("StudentJobs", StudentJobsSchema);