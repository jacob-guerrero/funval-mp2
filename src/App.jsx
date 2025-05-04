import { useState } from "react";
import Footer from "./components/Footer";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import Main from "./components/Main";
import useData from "./hooks/useData";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  const [units, setUnits] = useState("metric");
  const { loading, response } = useData(
    `https://api.openweathermap.org/data/2.5/weather?q=london&units=${units}&appid=${API_KEY}`
  );

  return (
    <div className="bg-[#1E213A] w-full min-h-screen flex flex-col items-center md:flex-row md:items-start font-weather">
      <Main loading={loading} response={response} units={units} />
      <div className="bg-[#100E1D] w-full flex flex-col gap-8 md:w-3/5">
        <Forecast />
        <Highlights />
        <Footer />
      </div>
    </div>
  );
}

export default App;
