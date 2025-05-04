import React from "react";
import formatUnixDate from "../utils/formatUnixDate";

export default function WeatherMoreInfo({ loading, response }) {
  const { dt, name, sys, weather } = response || {};
  const formattedDate = formatUnixDate(dt); // Format function "weekday, day month"
  const weatherDescription = weather?.[0].description || "";
  const place = `${name}, ${sys?.country}`;

  if (loading) {
    return (
      <div className="w-full h-2/7 flex items-center justify-center text-gray-300">
        loading...
      </div>
    );
  }

  return (
    <div className="w-full h-2/7 text-gray-300 flex flex-col items-center gap-4">
      <h3 className="w-full h-1/2 text-3xl text-gray-300 flex justify-center items-center capitalize">
        {weatherDescription}
      </h3>

      <div className="w-full h-1/2 flex flex-col justify-center gap-4 pb-5 text-gray-400">
        <div className="flex justify-center items-center gap-4">
          <p className="font-semibold">Today</p>
          <p>{formattedDate}</p>
        </div>

        <div className="flex justify-center gap-2">
          <picture>
            <img src="/icons/location_on.svg" alt="location" className="w-6" />
          </picture>
          <p className="font-semibold">{place}</p>
        </div>
      </div>
    </div>
  );
}
