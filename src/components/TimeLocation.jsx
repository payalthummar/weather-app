import { format } from "date-fns";
export default function TimeLocation({ cityName, country }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {format(new Date(), `EEEE, dd MMM yyyy | 'Local time:' p `)}
          {/* Wednesday, 22 Feb 2023 | Local time: 04:23 PM */}
        </p>
      </div>
      <div className="flex items-center justify-center my-6">
        <h2 className="text-white text-3xl font-medium">
          {cityName}, {country}
        </h2>
      </div>
    </div>
  );
}
