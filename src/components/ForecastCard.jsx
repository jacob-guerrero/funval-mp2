import React from "react";
import formatUnixDate from "../utils/formatUnixDate";

export default function ForecastCard({ data, units }) {
  const { dt, main, weather } = data;

  // Check if the forecast date is tomorrow
  const currentDate = new Date();
  const forecastDate = new Date(dt * 1000);
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);
  // Check if forecastDate is tomorrow
  const isTomorrow = forecastDate.toDateString() === tomorrow.toDateString();
  const formattedDate = isTomorrow ? "Tomorrow" : formatUnixDate(dt); // Show "Tomorrow" if it's the next day

  const weatherIcon = weather?.[0].icon || "04d";
  const tempMax = Math.round(main.temp_max);
  const tempMin = Math.round(main.temp_min);
  const tempUnits = units === "metric" ? "C" : "F";

  return (
    <li className="w-full flex flex-col items-center justify-between gap-2 px-4 py-3 bg-[#1E213A] text-[#E7E7EB] rounded-lg xl:px-3">
      <p>{formattedDate}</p>

      <picture>
        <img
          src={`/images/${weatherIcon}.png`}
          alt="weather"
          className="w-16"
        />
      </picture>

      <div className="flex justify-center gap-3">
        <p>
          {tempMax}°{tempUnits}
        </p>
        <p className="text-[#A09FB1]">
          {tempMin}°{tempUnits}
        </p>
      </div>
    </li>
  );
}
