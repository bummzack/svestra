module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: env('DATABASE_CLIENT', 'sqlite'),
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', '5432'),
        database: env('DATABASE_NAME','postgres'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'hello'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
