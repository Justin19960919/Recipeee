import React, { useState, useEffect } from "react";
const weatherServiceAPI = "http://localhost:3001/api/weather";

const WeatherComponent = () => {

  const [weather, setWeather] = useState({});
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherInformation);
    } else {
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
  }


  useEffect(getLocation, []);

  return (
    <div style={{ "color": "black" }}>
      {
        <div>
          <p>{JSON.stringify(weather.main)}</p>
        </div>
      }
    </div>
  )
}

export default WeatherComponent;