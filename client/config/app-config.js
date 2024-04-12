require('dotenv').config();

const appConfig = {
  weatherApiKey: process.env.OPENWEATHER_API_KEY,
  port: process.env.PORT,
};


module.exports = {appConfig};