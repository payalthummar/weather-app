import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import TemperatureAndDetails from "./TemperatureAndDetails";
import TimeLocation from "./TimeLocation";
import { format } from "date-fns";

export default function WeatherInfo() {
  const [searchCity, setsearchCity] = useState("");
  const [weather, setWeather] = useState([]);

  const fetchData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      if (response.ok) {
        const resjson = await response.json();
        console.log(resjson);
        setWeather(resjson);
        setsearchCity("");
        console.log("weather", weather);
      } else {
        alert("Something is going wrong while fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center my-6 items-center">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            className="text-xl p-2 font-light w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            placeholder="Which city's weather do you like to see?"
            value={searchCity}
            onChange={(event) => {
              setsearchCity(event.target.value);
            }}
          />
          <BiSearch
            size={28}
            fill="white"
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={fetchData}
          />
          <MdOutlineLocationOn
            size={28}
            fill="white"
            className="cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
      </div>
      {weather.main && (
        <>
          <TimeLocation cityName={weather.name} country={weather.sys.country} />
          <TemperatureAndDetails
            weatherType={weather.weather.map((weather) => weather.main)}
            weatherIcon={weather.weather.map((weather) => weather.icon)}
            temperature={(weather.main.temp - 273.15).toFixed(2)}
            feelsLike={(weather.main.feels_like - 273.15).toFixed(2)}
            humidity={weather.main.humidity}
            windSpeed={weather.wind.speed}
            sunrise={format(new Date(weather.sys.sunrise * 1000), "p")}
            sunset={format(new Date(weather.sys.sunset * 1000), "p")}
            temMax={(weather.main.temp_max - 273.15).toFixed(2)}
            temMin={(weather.main.temp_min - 273.15).toFixed(2)}
          />
        </>
      )}
    </>
  );
}
