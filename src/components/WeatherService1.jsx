// import { format } from "date-fns";
// import React, { useEffect, useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import { MdOutlineLocationOn } from "react-icons/md";
// import TemperatureAndDetails from "./TemperatureAndDetails";
// import TimeLocation from "./TimeLocation";
// import Forecast from "./Forecast";

// // "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2469ed517ab38109f0124ab104977c4a";

// const WeatherService1 = () => {
//   const [city, setCity] = useState("Berlin");
//   const [searchedCity, setSearchedCity] = useState("");
//   const [searchedWeatherData, setSearchedWeatherData] = useState([]);
//   const [weather, setWeather] = useState([]);
//   const [forecastWeather, setForecastWeather] = useState([]);
//   // useEffect(() => {
//   //
//   //     getWeatherData();
//   //     getForecastData();
//   //
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);
//   useEffect(() => {
//     const getWeatherData = async () => {
//       try {
//         let response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`
//         );
//         if (response.ok) {
//           const data = await response.json();
//           console.log("data ", data);
//           setWeather(data);
//           console.log("weather", weather);
//         } else {
//           alert("Error fetching results");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const getForecastData = async () => {
//       try {
//         let response = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`
//         );
//         if (response.ok) {
//           const data = await response.json();
//           console.log("data ", data);
//           setForecastWeather(data);
//           console.log("forecastWeather", forecastWeather);
//         } else {
//           alert("Error fetching results");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getWeatherData();
//     getForecastData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleSubmit = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       setSearchedCity(city);
//       setCity("");
//       // getWeatherData();
//       // getForecastData();
//     }
//   };
//   useEffect(() => {
//     const fetchSearchedWeatherData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
//         );
//         setSearchedWeatherData(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (searchedCity) {
//       fetchSearchedWeatherData();
//     }
//   }, [searchedCity]);

//   return (
//     <div>
//       <div className="flex flex-row justify-center my-6 items-center">
//         <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
//           <input
//             type="text"
//             className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
//             placeholder="search for city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <BiSearch
//             size={28}
//             fill="white"
//             className="cursor-pointer transition ease-out hover:scale-125"
//             onClick={handleSubmit}
//           />
//           <MdOutlineLocationOn
//             size={28}
//             fill="white"
//             className="cursor-pointer transition ease-out hover:scale-125"
//           />
//         </div>
//       </div>
//       {searchedWeatherData.main && (
//         <TimeLocation
//           cityName={searchedWeatherData.name}
//           country={searchedWeatherData.sys.country}
//         />
//       )}
//       {weather.main && (
//         <>
//           <TimeLocation cityName={weather.name} country={weather.sys.country} />
//           <TemperatureAndDetails
//             weathertype={weather.weather.map((weather) => weather.description)}
//             weathericon={weather.weather.map((weather) => weather.icon)}
//             temperature={(weather.main.temp - 273.15).toFixed()}
//             feelslike={(weather.main.feels_like - 273.15).toFixed()}
//             humidity={weather.main.humidity}
//             windspeed={weather.wind.speed}
//             sunrise={format(new Date(weather.sys.sunrise * 1000), "p")}
//             sunset={format(new Date(weather.sys.sunset * 1000), "p")}
//             temmax={(weather.main.temp_max - 273.15).toFixed()}
//             temmin={(weather.main.temp_min - 273.15).toFixed()}
//           />
//         </>
//       )}

//       {forecastWeather.list && (
//         <>
//           <Forecast
//             title="hourly forecast"
//             // forecastId={forecastWeather.city.id}
//             items={forecastWeather.list}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default WeatherService1;
