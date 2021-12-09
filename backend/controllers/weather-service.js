const https = require("https");

module.exports = (app) => {

  const getWeatherWithLocation = (req, res) => {
    const {longitude, latitude} = req.body;
    const weatherAPIKey = process.env.WEATHER_API_KEY;
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}&units=${unit}`;

    https.get(url, (response) => {
      response.on("data", (data) => {
        // construct to object
        const weatherData = JSON.parse(data);
        console.log(`got data: ${weatherData}`);
        const weatherResponse = {
          main: weatherData.main,
          weather: weatherData.weather,
          wind: weatherData.wind
        };
        res.status(200).json(weatherResponse);
      })
    })
  }


  /////////// APIS ///////////
  app.post('/api/weather', getWeatherWithLocation);

};