import React from "react";

export default function Forecast() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-4 md:w-3/5 md:pt-0">
        <div class="w-full max-w-sm p-8 flex justify-end gap-5 md:p-7">
          <button class="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#110E3C]  bg-[#E7E7EB] rounded-full">
            °C
          </button>
          <button class="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#E7E7EB]  bg-[#585676] rounded-full">
            °F
          </button>
        </div>

        <ul className="w-full max-w-lg px-4 pb-8 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] justify-items-center gap-4">
          <li className="w-full flex flex-col items-center justify-center gap-2 px-4 py-2 bg-[#1E213A] text-[#E7E7EB] rounded-lg">
            <p>Tomorrow</p>

            <picture>
              <img src="/images/10n.png" alt="weather" className="w-16" />
            </picture>

            <div className="flex justify-center gap-3">
              <p>19°C</p>
              <p className="text-[#A09FB1]">9°C</p>
            </div>
          </li>

          <li className="w-full flex flex-col items-center justify-center gap-2 px-4 py-2 bg-[#1E213A] text-[#E7E7EB] rounded-lg">
            <p>Wed, 30 Apr</p>

            <picture>
              <img src="/images/10n.png" alt="weather" className="w-16" />
            </picture>

            <div className="flex justify-center gap-3">
              <p>19°C</p>
              <p className="text-[#A09FB1]">9°C</p>
            </div>
          </li>

          <li className="w-full flex flex-col items-center justify-center gap-2 p-4 bg-[#1E213A] text-[#E7E7EB] rounded-lg">
            <p>Wed, 30 Apr</p>

            <picture>
              <img src="/images/10n.png" alt="weather" className="w-16" />
            </picture>

            <div className="flex justify-center gap-3">
              <p>19°C</p>
              <p className="text-[#A09FB1]">9°C</p>
            </div>
          </li>

          <li className="w-full flex flex-col items-center justify-center gap-2 px-4 py-2 bg-[#1E213A] text-[#E7E7EB] rounded-lg">
            <p>Wed, 30 Apr</p>

            <picture>
              <img src="/images/10n.png" alt="weather" className="w-16" />
            </picture>

            <div className="flex justify-center gap-3">
              <p>19°C</p>
              <p className="text-[#A09FB1]">9°C</p>
            </div>
          </li>

          <li className="w-full flex flex-col items-center justify-center gap-2 px-4 py-2 bg-[#1E213A] text-[#E7E7EB] rounded-lg">
            <p>Wed, 30 Apr</p>

            <picture>
              <img src="/images/10n.png" alt="weather" className="w-16" />
            </picture>

            <div className="flex justify-center gap-3">
              <p>19°C</p>
              <p className="text-[#A09FB1]">9°C</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
