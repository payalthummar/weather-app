import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-600 to-blue-600 h-fit shadow-xl shadow-gray-400">
      <WeatherInfo />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
