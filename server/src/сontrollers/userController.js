const User = require('../models/User');
const Role = require('../models/Methodist');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')
const ApiError = require("../error/ApiError.js");

const {
    Students,
    Docs,
    EntryDocs,
    Groups,
    StudentGroups,
    PrepDirs,
    StudentJobs,
    Companies,
} = require("../models/index.js");

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    } 
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "24h"} )
}

class userController {
    async login(req, res) {
        try {
            const {login, password} = req.body
            const user = await User.findOne({login})
            if (!user) {
                return res.status(400).json({message: `Пользователь ${login} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccessToken(user._id, user.isMethodist)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }

    async getStudents(req, res, next) {
        try {
            await Students.find({}).then( 
                async(students) => {
                    res.json(students);
                })
        }
        catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getDocs(req, res, next) {
        try {
            await Docs.find({}).then( 
                async(docs) => {
                    res.json(docs);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getEntryDocs(req, res, next) {
        try {
            await EntryDocs.find({}).then( 
                async(entryDocs) => {
                    res.json(entryDocs);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getGroups(req, res, next) {
        try {
            await Groups.find({}).then( 
                async(groups) => {
                    res.json(groups);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getStudentGroups(req, res, next) {
        try {
            await StudentGroups.find({}).then( 
                async(studentGroups) => {
                    res.json(studentGroups);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getPrepDirs(req, res, next) {
        try {
            await PrepDirs.find({}).then( 
                async(prepDirs) => {
                    res.json(prepDirs);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getStudentJobs(req, res, next) {
        try {
            await StudentJobs.find({}).then( 
                async(studentJobs) => {
                    res.json(studentJobs);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getCompanies(req, res, next) {
        try {
            await Companies.find({}).then( 
                async(companies) => {
                    res.json(companies);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }
}

module.exports = new userController()