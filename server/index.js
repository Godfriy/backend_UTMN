const express = require('express')
const cors = require('cors')
const {config} = require('dotenv')
const fileUpload = require('express-fileupload')
const errorHandler = require('./src/middleware/ErrorHandlingMiddleware.js')
const router = require('./src/routes/index.js')
const {connectDB} = require('./src/db.js')
const admin = require('./src/admin/admin.js')
const authRouter = require('./src/routes/authRouter')
// const scheduler = require('./src/scheduler/scheduler.js')
const path = require('path')
// const ffmpeg = require('fluent-ffmpeg')
// const fs = require('fs')
// const qr = require('qr-image')
// const jwt = require('jsonwebtoken')

// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
// ffmpeg.setFfmpegPath(ffmpegPath)

config()
const PORT = process.env.PORT || 5001
const app = express()
app.use(cors())
app.use(express.json({type: ['application/json', 'text/plain']}))
app.use(admin.adminBro.options.rootPath, admin.routerAdmin)
app.use(fileUpload())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.use('/auth', authRouter)
app.use(errorHandler)

// app.get('/', (req, res, next) => {
// 	try {
// 		const {video, email} = req.query
// 		if(!video || !email){
// 			return res.sendStatus(404)
// 		}

// 		const pathVideo = path.resolve(__dirname, 'static', video)
// 		if(!fs.existsSync(pathVideo)){
// 			return res.sendStatus(404)
// 		}


// 		const qrPath = path.resolve(__dirname, 'static', 'qr', email + '.png')

// 		if (!fs.existsSync(path.resolve(__dirname, 'static', 'qr'))) {
// 			fs.mkdirSync(path.resolve(__dirname, 'static', 'qr'), {recursive: true})
// 		}
// 		if (!fs.existsSync(qrPath)) {
// 			const code = qr.image(email, {type: 'png', size: 1})
// 			code.pipe(fs.createWriteStream(path.resolve(__dirname, 'static', 'qr', email + '.png')))
// 		}
// 		new ffmpeg(pathVideo)
// 			.input(qrPath)
// 			.complexFilter(['[0:v]scale=1920:-1[bg];[bg][1:v]overlay=W-w-1:H-h-1'])
// 			.outputOptions('-movflags frag_keyframe+empty_moov')
// 			.toFormat('mp4')
// 			.on('error', function (error) {}).on('end', function () {})
// 			.pipe(res, {end: true})
// 	}
// 	catch (e) {
// 		console.log(e)
// 		return res.sendStatus(404)
// 	}
// })

async function start() {
	try {
		await connectDB()
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}...`)
		})
		// scheduler()
	}
	catch (e) {
		console.log(e)
	}
}

start()


