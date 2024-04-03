const express = require('express');
const path = require('path');
const {appConfig} = require("./config/app-config");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'Weather App'});
});

app.use('/weather',weatherRoutes);

app.listen(appConfig.port,() => console.log(`Server started at: http://localhost:${appConfig.port}`));