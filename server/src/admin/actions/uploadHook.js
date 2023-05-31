const path = require('path')
const fs = require('fs')
const {requestParser} = require('adminjs')


const after = async ( response, request, context) => {
	const {record, logoHeader} = context
	if (record.isValid() && logoHeader) {
		const filePath = path.join('static', 'content', record.id().toString(), logoHeader.name)
		await fs.promises.mkdir(path.dirname(filePath), {recursive: true})
		await fs.promises.rename(logoHeader.path, filePath)
		await record.update({logoHeader: `/${filePath}`})
	}
	return response
}

const before = async (request, context) => {
	if (request.method === 'post') {
		const {logoHeader, ...otherParams} = request.payload
		// eslint-disable-next-line no-param-reassign
		context.logoHeader = logoHeader
		return {
			...request,
			payload: otherParams,
		}
	}
	return request
}

module.exports = {after, before}
