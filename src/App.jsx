import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import Main from "./components/Main";
import useData from "./hooks/useData";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  const IPINFO_API_KEY = import.meta.env.VITE_IPINFO_KEY;

  // State for latitude and longitude
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [units, setUnits] = useState("metric");

  // Fetch weather data using latitude and longitude
  const { loading, response } = useData(
    lat && lon
      ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
      : null
  );

  const { loading: loadingForecast, response: responseForecast } = useData(
    lat && lon
      ? `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
      : null
  );

  // Get user's location using IPInfo API
  useEffect(() => {
    if (!lat || !lon) {
      fetch(`https://ipinfo.io/json?token=${IPINFO_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          const [latitude, longitude] = data.loc.split(",");
          setLat(parseFloat(latitude));
          setLon(parseFloat(longitude));
        })
        .catch((err) => console.error("IPInfo fallback failed:", err));
    }
  }, [lat, lon, IPINFO_API_KEY]);

  return (
    <div className="bg-[#1E213A] w-full min-h-screen flex flex-col items-center md:flex-row md:items-start font-weather">
      <Main
        loading={loading}
        response={response}
        units={units}
        setLat={setLat}
        setLon={setLon}
      />
      <div className="bg-[#100E1D] w-full flex flex-col gap-8 md:w-3/5">
        <Forecast
          loading={loadingForecast}
          response={responseForecast}
          units={units}
          setUnits={setUnits}
        />
        <Highlights loading={loading} response={response} units={units} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
