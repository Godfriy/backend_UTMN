const nodemailer = require('nodemailer')
const {config} = require('dotenv')
config()

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD
	},
})

module.exports = async function sendMail(to, subject, text) {
	let options = {
		from: process.env.MAIL_USER,
		to,
		subject,
		html: text
	}

	await transporter.sendMail(options, (err, info) => {
		if (err) {
			console.log(err)
		}
		else {
			console.log('Email sent', info.response)
			return true
		}
	})
}
