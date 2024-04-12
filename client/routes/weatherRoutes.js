const express=require('express');
const router=express.Router();
const weatherController=require('../controllers/weatherController.js');
const axios = require('axios');

const {appConfig} = require("../config/app-config.js");


router.get('/',weatherController.getWeather);

module.exports=router

