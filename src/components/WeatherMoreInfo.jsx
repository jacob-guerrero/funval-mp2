import React from "react";

export default function WeatherMoreInfo() {
  return (
    <div className="w-full h-2/7 text-gray-300 flex flex-col items-center gap-4">
      <h3 className="w-full h-1/2 text-3xl text-gray-300 flex justify-center items-center">
        Light Rain
      </h3>

      <div className="w-full h-1/2 flex flex-col justify-center gap-4 pb-5 text-gray-400">
        <div className="flex justify-center items-center gap-4">
          <p className="font-semibold">Today</p>
          <p>Tue. 29 Apr</p>
        </div>

        <div className="flex justify-center gap-2">
          <picture>
            <img src="/icons/location_on.svg" alt="location" className="w-6" />
          </picture>
          <p className="font-semibold">London</p>
        </div>
      </div>
    </div>
  );
}
