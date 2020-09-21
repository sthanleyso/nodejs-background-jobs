import Mailer from '../lib/Mailer';

export default {
	key: 'RegistrationMail',
	async handle({ data: { user } }) {
		await Mailer.sendMail({
			from: 'Queue Test <queue@queuetest.com.br>',
			to: `${user.name} <${user.email}>`,
			subject: 'Cadastro de usuário',
			html: `
				Olá, ${user.name}, bem-vindo ao sistema de filas da Rocketseat :)
			`,
		});
	},
};
