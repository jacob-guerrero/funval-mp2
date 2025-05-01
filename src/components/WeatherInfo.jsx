import React from "react";

export default function WeatherInfo() {
  return (
    <div className="w-full h-4/7 flex flex-col justify-center items-center">
      <picture className="w-full h-4/7 flex justify-center items-center relative after:content-[''] after:absolute after:inset-0 after:bg-[url('/images/Cloud-background.png')] after:bg-cover after:bg-no-repeat after:bg-center after:opacity-5">
        <img
          src="/images/10n.png"
          alt="weather icon"
          className="w-full max-w-28 relative z-10"
        />
      </picture>

      <div className="w-full h-3/7 text-white flex justify-center items-center">
        <p className="text-9xl">19</p>
        <p className="text-7xl text-gray-400">°C</p>
      </div>
    </div>
  );
}
