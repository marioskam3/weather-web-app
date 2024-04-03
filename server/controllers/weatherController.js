const {appConfig} = require("../config/app-config");
const axios = require('axios');

const getWeather = async (req, res) => {


    try {
        const { city } = req.query.city;
        const response= await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appConfig.weatherApiKey}`)
            .then((response) => response.json()
        );

        if(!response.ok){
            if (response.status === 404) {
                throw new Error('Data not found');
            } else if (response.status === 500) {
                throw new Error('Server error');
            } else {
                throw new Error('Network response was not ok');
            }
        }

        console.log(JSON.stringify(response));
        res.render('index.ejs',{title:'Weather App'});
        return JSON.stringify(response);
        
    
    }    
    catch (error) {
        res.status(500).json({ error: error.message });
    } 
}

module.exports={getWeather};