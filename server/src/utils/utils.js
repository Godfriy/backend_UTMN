class Utils {
	static getFormatDate(time) {
		const date = new Date(time)
		let d = date.getDate()
		let m = date.getMonth()
		let h = date.getHours()
		let min = date.getMinutes()
		if (d < 10) {
			d = '0' + d
		}
		if (m < 10) {
			m = '0' + m
		}
		if (h < 10) {
			h = '0' + h
		}
		if (min < 10) {
			min = '0' + min
		}

		return `${d}.${m} в ${h}:${min}`
	}
}

module.exports = Utils
