const mongoose = require('mongoose')
const {config} = require('dotenv')
config()

const localMongoose = process.env.DB_URL

const connectDB = async () => {
	try {
		await mongoose.connect(localMongoose, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	}
	catch (err) {
		console.log(err)
	}

}

module.exports = {connectDB}

