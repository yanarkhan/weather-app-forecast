import React from "react";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TempAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },

    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}°`,
    },

    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()}${units === "metric" ? "m/s" : "mph"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },

    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },

    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },

    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-col items-center justify-between py-3 space-y-3 md:flex-row md:space-y-0">
        <img src={icon} alt="weather icon" className="w-20" />
        <p className="text-4xl font-medium sm:text-5xl">
          {`${temp.toFixed()}`}°
        </p>

        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex items-center justify-start text-sm">
              <Icon size={20} className="mr-2" />
              <p className="font-light">
                {`${title}: `}
                <span className="font-medium ml-1">{value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 text-sm py-3 md:flex-row md:space-y-0 md:space-x-10">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex items-center justify-center space-x-2">
            <Icon size={30} />
            <p className="font-light">
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
