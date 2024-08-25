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
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
