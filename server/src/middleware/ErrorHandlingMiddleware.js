const ApiError = require('../error/ApiError.js')
const {ErrorLogging} = require('../models/index')
const jwt = require('jsonwebtoken')

module.exports = async function (err, req, res, next) {
	try {
		let token, email = '', data
		if (req.headers.authorization) {
			token = req.headers.authorization.split(' ')[1]
			email = jwt.decode(token).email
		}
		if (req.method === 'GET') {
			data = JSON.stringify(req.query)
		}
		else {
			data = JSON.stringify(req.body)
		}
		if(err.error){
			await ErrorLogging.create({user: email, error: err.error.toString(), data, endpoint: req.path})
		}

		if (err instanceof ApiError) {
			return res.status(err.status).json({message: err.message})
		}
		return res.status(500).json({message: 'Неизвестная ошибка'})
	}
	catch (e) {
		console.log(e)
		return res.status(500).json({message: 'Неизвестная ошибка'})
	}

}
