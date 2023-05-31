const { config } = require("dotenv");
config();

const newLesson = (time) => {
    return `
		<b>Скоро новый урок</b>
		<p>Привет, на связи HELP! Хотим напомнить, что уже ${time} у вас пройдет новый урок с куратором. Так что запасайтесь мотивацией, впереди много интересного.</p>
	`;
};
const forgotPassword = (uuid) => {
    return `
			<b>Забыли пароль? Не беда.</b>
			<div><a href=${
                "https://" + process.env.DOMEN + "/recover/" + uuid
            }>Просто перейдите по этой ссылке и заведите себе новый.</a></div>
			<div>Главное его не забудьте!</div>
			<div>Если вы не запрашивали восстановление пароля, просто проигнорируйте это письмо.</div>
			<div><br></div>
			<div>Если ссылка не работает, то пройдите по этому адресу: ${
                "https://" + process.env.DOMEN + "/recover/" + uuid
            }</div>
			`;
};
const homework = `
					<b>Домашнее задание проверено</b>
					<div>Куратор уже проверил ваше домашнее задание, так что самое время зайти на платформу и узнать свой балл.</div>
				`;
module.exports = {
    newLesson,
    homework,
    forgotPassword,
};
