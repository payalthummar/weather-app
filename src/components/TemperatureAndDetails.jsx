import { CiTempHigh } from "react-icons/ci";
import { BiDroplet, BiWind } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { BsSunset } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function TemperatureAndDetails({
  weatherType,
  weatherIcon,
  temperature,
  feelsLike,
  humidity,
  windSpeed,
  sunrise,
  sunset,
  temMax,
  temMin,
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{weatherType}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        {/* src="http://openweathermap.org/img/wn/01d@2x.png" */}
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt=""
          className="w-20"
        />
        <p className="text-5xl">{temperature}°</p>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh size={20} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{feelsLike}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiDroplet size={20} className="mr-1" />
            Humidity: <span className="font-medium ml-1">{humidity}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiWind size={20} className="mr-1" />
            Wind Speed: <span className="font-medium ml-1">{windSpeed}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <FiSun />
        <p className="font-light">
          Sunrise: <span className="font-medium ml-1">{sunrise}</span>
        </p>
        <p className="font-light">|</p>
        <BsSunset />
        <p className="font-light">
          Sunset: <span className="font-medium ml-1">{sunset}</span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowUp />
        <p className="font-light">
          High: <span className="font-medium ml-1">{temMax}°</span>
        </p>
        <AiOutlineArrowDown />
        <p className="font-light">
          Low: <span className="font-medium ml-1">{temMin}°</span>
        </p>
      </div>
    </div>
  );
}
