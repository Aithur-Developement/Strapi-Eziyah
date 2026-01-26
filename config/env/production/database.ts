export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', '208.87.135.86'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'Validet'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', '6cigvvxmsgss7tft'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
