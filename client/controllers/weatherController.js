const {appConfig} = require("../config/app-config");
const axios = require('axios');

const getWeather = async (req, res) => {
    const { city } = req.query;
    //console.log(city);
    try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appConfig.weatherApiKey}`);

        if (weatherResponse.status !== 200) {
              
        }

        return res.render('index.ejs', {title: 'Weather App',weather: weatherResponse.data});

    } catch (error) {
        if (error.response.status === 404) {
          return res.render('index.ejs', {title: 'Weather App', weather: {message: 'City not found'}});
        } else if (error.response.status === 400) {
          return res.render('index.ejs', {title: 'Weather App', weather: {message: 'No city name provided'}}); 
        } else if (error.response.status === 500) {
          console.error('Internal Server Error');
        } 
        else if (error.response.status === 401) {
          console.error('Invalid API Key');
        }
        res.status(500).json({ error: error.message });
    }
}

module.exports={getWeather};