const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8000,
  host: process.env.HOST || 'http://localhost/',
  dbDatabase: process.env.DB_DATABASE,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD || '',
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbConnetion: process.env.DB_CONNECTION,
};

module.exports = { config };
