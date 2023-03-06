import { format, parseISO } from "date-fns";
import React from "react";

function Forecast(props) {
  console.log(props.items);
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{props.title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between  ">
        {props.items.slice(0, 6).map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">
              {/* {item.dt_txt && format(parseISO(item.dt_txt), "p")}{" "} */}
              {item.dt_txt && format(parseISO(item.dt_txt), "HH:mm b")}
              {/* {item.dt_txt && format(parseISO(item.dt_txt), "dd/MM")}{" "} */}
              {/* {format(new Date(), `EEEE, dd MMM yyyy | 'Local time:' p `)} */}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather.map(
                (weather) => weather.icon
              )}@2x.png`}
              alt=""
              className="w-12 my-1"
            />
            <p className="font-medium">
              {(item.main.temp - 273.15).toFixed()}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
