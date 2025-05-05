import WeatherInfo from "./WeatherInfo";
import Searchbar from "./Searchbar";
import WeatherMoreInfo from "./WeatherMoreInfo";

export default function Main({ loading, response, units, setLat, setLon }) {
  return (
    <main className="w-full min-h-screen h-screen bg-[#1E213A] md:w-2/5">
      <Searchbar setLat={setLat} setLon={setLon} />
      <WeatherInfo loading={loading} response={response} units={units} />
      <WeatherMoreInfo loading={loading} response={response} />
    </main>
  );
}
