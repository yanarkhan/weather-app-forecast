import React from "react";

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-lg font-extralight sm:text-xl md:text-2xl">
          {formattedLocalTime}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-2xl font-medium sm:text-3xl md:text-4xl">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
