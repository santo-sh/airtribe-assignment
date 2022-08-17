require('dotenv').config();

const CONFIG = {
  APP: {
    PORT: process.env.PORT,
    ENV: process.env.NODE_ENV
  },
  DB : {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  }
}

module.exports = CONFIG;