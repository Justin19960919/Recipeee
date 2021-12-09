import React, {useState, useEffect} from "react";
const weatherServiceAPI = "http://localhost:3001/api/weather";

const WeatherComponent = () => {

  const [weather, setWeather] = useState({});
  const [clicked, setClicked] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherInformation);
    }else{
      console.log("no access");
    }
  }

  const getWeatherInformation = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    const location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    fetch(weatherServiceAPI, {
      method: "POST",
      body: JSON.stringify(location),
      headers: {
        "content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(weather => setWeather(weather));
    setClicked(true);
  }


  // useEffect(getLocation, []);

  return(
      <div style={{"color": "black"}}>
        <button onClick={getLocation()}>Get Weather</button>
        {
          clicked &&
          <div>
            <p>{JSON.stringify(weather)}</p>
            <p>Temperature: {weather["main"]["temp"]}</p>
            <p>Min Temperature: {weather["main"]["temp_min"]}</p>
            <p>Max Temperature: {weather["main"]["temp_max"]}</p>
            <p>Weather Status: {weather["weather"]["main"]} {weather["weather"]["description"]}</p>
            <p>Wind: {weather["wind"]["speed"]}</p>
          </div>
        }
      </div>
  )
}

export default WeatherComponent;