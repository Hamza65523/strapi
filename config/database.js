module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", process.env.DATABASE_HOST || "localhost"),
      port: env.int("DATABASE_PORT",process.env.DATABASE_PORT || 5432),
      database: env("DATABASE_NAME", process.env.DATABASE_NAME || "strapi_test"),
      user: env("DATABASE_USER",process.env.DATABASE_USERNAME || "postgres"),
      password: env("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD || ""),
      // ssl: env('DATABASE_SSL', false)
    },
  }
});

// Testing125