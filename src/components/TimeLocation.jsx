import { format } from "date-fns";
import React from "react";

function TimeLocation(props) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {format(new Date(), `EEEE, dd MMM yyyy | 'Local time:' p `)}
          {/* Friday, 10 Feb 2023 | Local time: 12:32 PM */}
        </p>
      </div>
      <div className="flex items-center justify-center my-6">
        <h2 className="text-white text-3xl font-medium">
          {props.cityName}, {props.country}
        </h2>
      </div>
    </div>
  );
}

export default TimeLocation;
