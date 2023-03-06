import "./App.css";

import WeatherService from "./components/WeatherService";

const App = () => {
  return (
    <div className=" bg-gradient-to-br from-cyan-700 to-blue-700 h-screen shadow-xl shadow-gray-400">
      <div className="mx-auto py-5 px-32  max-w-screen-md">
        <WeatherService />
      </div>
    </div>
  );
};

export default App;
