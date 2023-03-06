import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import TemperatureAndDetails from "./TemperatureAndDetails";
import TimeLocation from "./TimeLocation";
import Forecast from "./Forecast";

// "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2469ed517ab38109f0124ab104977c4a";

const WeatherService = () => {
  const [city, setCity] = useState("Berlin");
  const [alert, setAlert] = useState(false);
  const [weather, setWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);

  useEffect(() => {
    if (city === "") {
      setAlert(false);
    }
    getWeatherData();
    getForecastData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getWeatherData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data ", data);
        setWeather(data);
        // setCity("");
        console.log("weather", weather);
      } else {
        if (city === "") {
          setAlert(false);
        } else {
          setAlert(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getForecastData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data ", data);
        setForecastWeather(data);
        console.log("forecastWeather", forecastWeather);
      } else {
        if (city === "") {
          setAlert(false);
        } else {
          setAlert(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlert(false);
    getWeatherData();
    getForecastData();
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-medium text-yellow-400 ">
        Welcome to Weather App
      </h1>
      <h6 className="text-center font-medium mt-4 text-amber-500">
        Enter the city to see the weather
      </h6>
      <div className="flex flex-row justify-center my-6 items-center">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            placeholder="search for city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <BiSearch
            size={28}
            fill="white"
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSubmit}
          />
          <MdOutlineLocationOn
            size={28}
            fill="white"
            className="cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
      </div>
      {alert && (
        <div
          className="mb-4 rounded-lg bg-red-100 py-5 px-6 text-red-800 dark:text-red-400"
          role="alert"
        >
          Search for valid city
        </div>
      )}

      {weather.main && (
        <>
          <TimeLocation cityName={weather.name} country={weather.sys.country} />
          <TemperatureAndDetails
            weathertype={weather.weather.map((weather) => weather.description)}
            weathericon={weather.weather.map((weather) => weather.icon)}
            temperature={(weather.main.temp - 273.15).toFixed()}
            feelslike={(weather.main.feels_like - 273.15).toFixed()}
            humidity={weather.main.humidity}
            windspeed={weather.wind.speed}
            sunrise={format(new Date(weather.sys.sunrise * 1000), "p")}
            sunset={format(new Date(weather.sys.sunset * 1000), "p")}
            temmax={(weather.main.temp_max - 273.15).toFixed()}
            temmin={(weather.main.temp_min - 273.15).toFixed()}
          />
        </>
      )}

      {forecastWeather.list && (
        <>
          <Forecast
            title="hourly forecast"
            // forecastId={forecastWeather.city.id}
            items={forecastWeather.list}
          />
        </>
      )}
    </div>
  );
};

export default WeatherService;
