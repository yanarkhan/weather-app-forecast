import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Jakarta",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Paris",
    },
    {
      id: 5,
      name: "Sydney",
    },
    {
      id: 6,
      name: "Lisbon",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-between my-4 sm:my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-base sm:text-lg font-medium
            px-2 sm:px-3 py-1.5 sm:py-2
            rounded-md
            hover:bg-gray-700/20 active:bg-gray-700/30
            transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-gray-400/50"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
