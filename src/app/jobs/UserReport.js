export default {
	key: 'UserReport',
	options: {
		delay: 5000,
		attempts: 3,
	},
	async handle({ data: { user } }) {
		console.log(user);
	},
};
