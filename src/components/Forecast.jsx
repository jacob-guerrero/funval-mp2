import React from "react";
import getForecast from "../utils/getForecast";
import ForecastCard from "./ForecastCard";

export default function Forecast({ loading, response, units, setUnits }) {
  const dataForecast = getForecast(response);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-4 md:py-0">
        <div className="w-full max-w-2xl px-4 py-8 flex justify-end gap-5 md:py-7 xl:px-0">
          <button className="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#110E3C]  bg-[#E7E7EB] rounded-full cursor-pointer">
            °C
          </button>
          <button className="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#E7E7EB]  bg-[#585676] rounded-full cursor-pointer">
            °F
          </button>
        </div>

        <ul className="w-full max-w-2xl px-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] justify-items-center gap-4 xl:grid-cols-5 xl:px-0">
          {dataForecast?.map(item => <ForecastCard key={item.dt} data={item} units={units} />)}
        </ul>
      </div>
    </>
  );
}
