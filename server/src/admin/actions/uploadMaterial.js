const path = require('path')
const fs = require('fs')
const {requestParser} = require('adminjs')


const after = async ( response, request, context) => {
	const {record, material} = context
	if (record.isValid() && material) {
		const filePath = path.join('static', 'lessonMaterials', record.name.toString()+ '_' + record.id().toString(), material.name)
		await fs.promises.mkdir(path.dirname(filePath), {recursive: true})
		await fs.promises.rename(material.path, filePath)
		await record.update({material: `/${filePath}`})
	}
	return response
}

const before = async (request, context) => {
	if (request.method === 'post') {
		const {material, ...otherParams} = request.payload
		// eslint-disable-next-line no-param-reassign
		context.material = material
		return {
			...request,
			payload: otherParams,
		}
	}
	return request
}

module.exports = {after, before}
