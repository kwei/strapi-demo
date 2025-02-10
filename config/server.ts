export default ({ env }) => ({
  host: env('HOST', '192.168.24.145'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
