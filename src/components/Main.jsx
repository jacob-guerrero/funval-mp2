import WeatherInfo from "./WeatherInfo";
import Searchbar from "./Searchbar";
import WeatherMoreInfo from "./WeatherMoreInfo";

export default function Main({ loading, response, units }) {
  return (
    <main className="w-full min-h-screen h-screen bg-[#1E213A] md:w-2/5">
      <Searchbar />
      <WeatherInfo loading={loading} response={response} units={units} />
      <WeatherMoreInfo />
    </main>
  );
}
