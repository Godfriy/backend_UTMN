const AdminBro = require("admin-bro");
const AdminBroMongoose = require("admin-bro-mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const models = require("../models/index.js");

const {
    Students,
    Docs,
    EntryDocs,
    Groups,
    StudentGroups,
    PrepDirs,
    StudentJobs,
    Companies,
} = models;

/** @type {AdminBro.AdminBroOptions} */
const options = {
    resources: [Students, Docs, EntryDocs, Groups, StudentGroups, PrepDirs, StudentJobs, Companies,],
};

module.exports = options;