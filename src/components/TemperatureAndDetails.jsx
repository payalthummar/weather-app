import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { BiDroplet, BiWind } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { BsSunset } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const TemperatureAndDetails = (props) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{props.weathertype}</p>
        {/* src="http://openweathermap.org/img/wn/01d@2x.png" */}
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={`http://openweathermap.org/img/wn/${props.weathericon}@2x.png`}
          alt=""
          className="w-20"
        />
        <p className="text-5xl">{props.temperature}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh size={20} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{props.feelslike} ºC</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiDroplet size={20} className="mr-1" />
            Humidity:<span className="font-medium ml-1">{props.humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiWind size={20} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1">{props.windspeed}km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <FiSun />
        <p className="font-light">
          Sunrise:<span className="font-medium ml-1">{props.sunrise}</span>
        </p>
        <p className="font-light">|</p>
        <BsSunset />
        <p className="font-light">
          Sunset:<span className="font-medium ml-1">{props.sunset}</span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowUp />
        <p className="font-light">
          High:<span className="font-medium ml-1">{props.temmax}°</span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowDown />
        <p className="font-light">
          Low:<span className="font-medium ml-1">{props.temmin}°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
