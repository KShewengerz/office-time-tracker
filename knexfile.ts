require('dotenv').config();


module.exports = {
  development: {
    client: process.env.DEV_DB_CLIENT,
    connection: {
      database: process.env.DEV_DB_NAME,
      user    : process.env.DEV_DB_USERNAME,
      password: process.env.DEV_DB_PASSWORD
    }
  }
};

