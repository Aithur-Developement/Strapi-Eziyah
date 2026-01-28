export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://strapi.ezyiah.com.au')
  app: {
    keys: env.array('APP_KEYS'),
  },
});
