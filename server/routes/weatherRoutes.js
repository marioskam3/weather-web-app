const express=require('express');
const router=express.Router();
const weatherController=require('../controllers/weatherController.js');
const axios = require('axios');
const {appConfig} = require("../config/app-config");



//router.get('/',weatherController.getWeather);

router.get('/', async (req,res)=>{
    const { city } = req.query;
    console.log(city);
    try {
        const response= await axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appConfig.weatherApiKey}`,
            headers: {
                'Content-Type': 'application/json',
            },
        });

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
    
});

module.exports=router