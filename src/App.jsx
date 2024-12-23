import React, { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "depok" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 bg-gradient-to-br shadow-xl ${formatBackground()} `}
    >
      <div
        className={`w-full max-w-screen-lg rounded-lg overflow-hidden 
          py-4 sm:py-6 md:py-8
          px-4 sm:px-6 md:px-8 lg:px-12
          bg-gradient-to-br shadow-xl  
          transition-all duration-300 ease-in-out
          ${formatBackground()}`}
      >
        <div className="space-y-4 sm:space-y-6">
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />

          {weather && (
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} units={units} />
              <div className="space-y-4 md:space-y-6">
                <Forecast title="3 hour step forecast" data={weather.hourly} />
                <Forecast title="daily forecast" data={weather.daily} />
              </div>
            </div>
          )}
        </div>

        <ToastContainer
          autoClose={2500}
          hideProgressBar={true}
          theme="colored"
          className="sm:text-base md:text-lg"
        />
      </div>
    </div>
  );
};

export default App;
