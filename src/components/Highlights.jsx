import React from "react";

export default function Highlights() {
  return (
    <div className="w-full px-4 py-4 flex justify-center xl:px-0">
      <div className="w-full max-w-2xl flex flex-col gap-3">
        <h2 className="text-white font-bold text-3xl">Today's Highlights</h2>
        <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center gap-4 lg:grid-cols-2">
          <li className="w-full flex flex-col items-center justify-center gap-4 px-4 py-6 bg-[#1E213A] text-[#E7E7EB] rounded-md">
            <p className="font-semibold">Wind Status</p>
            <div className="flex items-center gap-2">
              <p className="text-[#E7E7EB] text-6xl font-bold">1.34</p>
              <p className="text-[#E7E7EB] text-4xl">ms</p>
            </div>
            <div className="flex items-center gap-2">
              <picture className="flex justify-center items-center w-8 h-8 rounded-full bg-[#ffffff4d]">
                <img src="/icons/navigation.svg" alt="wind" className="w-6" />
              </picture>
              <p className="font-semibold">N</p>
            </div>
          </li>

          <li className="w-full flex flex-col items-center justify-center gap-4 px-4 py-6 bg-[#1E213A] text-[#E7E7EB] rounded-md">
            <p className="font-semibold">Humidity</p>
            <div className="flex items-center gap-2">
              <p className="text-[#E7E7EB] text-6xl font-bold">79</p>
              <p className="text-[#E7E7EB] text-4xl">%</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="w-[70%] font-bold text-xs flex justify-between text-[#A09FB1]">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="flex items-center w-[70%] h-2 bg-[#E7E7EB] rounded-3xl">
                <div
                  className="h-2 bg-[#FFEC65] rounded-3xl m-0 p-0"
                  style={{ width: `${79}%` }}
                ></div>
              </div>
              <div className="w-[70%] text-right font-bold text-[#A09FB1]">%</div>
            </div>
          </li>

          <li className="w-full flex flex-col items-center justify-center gap-4 px-4 py-6 bg-[#1E213A] text-[#E7E7EB] rounded-md">
            <p className="font-semibold">Visibility</p>
            <div className="flex items-center gap-1">
              <p className="text-[#E7E7EB] text-6xl font-bold">9.91</p>
              <p className="text-[#E7E7EB] text-4xl">km</p>
            </div>
          </li>

          <li className="w-full flex flex-col items-center justify-center gap-4 px-4 py-6 bg-[#1E213A] text-[#E7E7EB] rounded-md">
            <p className="font-semibold">Air Pressure</p>
            <div className="flex items-center gap-1">
              <p className="text-[#E7E7EB] text-6xl font-bold">1009</p>
              <p className="text-[#E7E7EB] text-4xl">mb</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
