export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://databases-and-other-strapieziyah-e57d1s-4f7072-76-13-23-4.traefik.me'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
