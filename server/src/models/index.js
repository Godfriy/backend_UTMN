const Students = require("./students.model");
const Docs = require("./docs.model");
const EntryDocs = require("./entryDocs.model");
const Groups = require("./groups.model");
const StudentGroups = require("./groups.students.model");
const PrepDirs = require("./prepDirs.model");
const StudentJobs = require("./jobs.students.model");
const Companies = require("./companies.model");
const User = require("./User");
const Role = require("./Methodist");

module.exports = {
    Students,
    Docs,
    EntryDocs,
    Groups,
    StudentGroups,
    PrepDirs,
    StudentJobs,
    Companies,
    Role,
    User
};