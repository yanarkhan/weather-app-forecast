import React, { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && city !== "") {
      handleSearchClick();
    }
  };

  return (
    <div className="flex flex-col gap-4 my-4 sm:flex-row sm:gap-6 sm:my-6">
      {/* Search Section */}
      <div className="flex-1 flex items-center gap-2 sm:gap-3">
        <div className="relative flex-1">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Search by city..."
            className="w-full px-3 py-2
              text-base text-gray-700
              bg-white/90 rounded-lg
              shadow-md focus:shadow-lg
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-gray-400/50
              placeholder:text-gray-400 placeholder:text-base
              capitalize placeholder:normal-case sm:py-2.5 sm:text-lg"
          />
        </div>

        <button
          onClick={handleSearchClick}
          className="p-2 rounded-lg bg-white/90 shadow-md
            hover:shadow-lg active:scale-95
            transition-all duration-200"
        >
          <BiSearch size={24} className="text-gray-700" />
        </button>

        <button
          onClick={handleLocationClick}
          className="p-2 rounded-lg bg-white/90 shadow-md
            hover:shadow-lg active:scale-95
            transition-all duration-200"
        >
          <BiCurrentLocation size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Units Toggle Section */}
      <div className="flex items-center justify-center gap-2 sm:justify-end">
        <button
          className="text-xl font-medium 
            hover:scale-110 active:scale-95
            transition-all duration-200
            focus:outline-none sm:text-2xl"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <span className="text-xl font-medium opacity-50 sm:text-2xl">|</span>
        <button
          className="text-xl font-medium
            hover:scale-110 active:scale-95
            transition-all duration-200
            focus:outline-none sm:text-2xl"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
