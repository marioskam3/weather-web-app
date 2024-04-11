const {appConfig} = require("../config/app-config");
const axios = require('axios');

const getWeather = async (req, res) => {
    const { city } = req.query;
    //console.log(city);
    try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appConfig.weatherApiKey}`);

        if (weatherResponse.status !== 200) {
            if (response.status === 404) {
                throw new Error('Data Not Found');
              } else if (response.status === 500) {
                throw new Error('Internal Server Error');
              } 
              else if (response.status === 401) {
                throw new Error('Invalid API Key');
              }
        }

        return res.render('index.ejs', {title: 'Weather App',weather: weatherResponse.data});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={getWeather};