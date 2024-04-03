const {appConfig} = require("../config/app-config");
const axios = require('axios');

const getWeather = async (req, res) => {
    const { city } = req.query;
    //console.log(city);
    try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appConfig.weatherApiKey}`);

        if (weatherResponse.status !== 200) {
            if (response.status === 404) {
                throw new Error('Data not found');
              } else if (response.status === 500) {
                throw new Error('Server error');
              } else {
                throw new Error('Internal server error');
              }
        }

        return res.render('index.ejs', {title: 'Weather App',weather: weatherResponse.data});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={getWeather};