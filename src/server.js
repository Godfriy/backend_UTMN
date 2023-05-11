const express = require('express');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const run = async () => {
	await mongoose.connect('mongodb://localhost:27017/test', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const admin = new AdminBro(options);
	const router = buildAdminRouter(admin);
	app.use(admin.options.rootPath, router);
	app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
	});
};

module.exports = run;