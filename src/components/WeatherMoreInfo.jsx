import React from "react";

export default function WeatherMoreInfo({ loading, response }) {
  const { dt, name, sys, weather } = response || {};
  const date = dt ? new Date(dt * 1000) : null;
  const options = { weekday: "short", day: "numeric", month: "short" }; // Options for formatting
  const formatted = date ? date.toLocaleDateString("en-US", options) : ""; // Format the date
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
          <p>{formatted}</p>
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
