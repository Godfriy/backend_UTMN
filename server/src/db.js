const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.resolve(__dirname, './.env') });

const localMongoose = process.env.DATABASE_URL

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', true)
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

