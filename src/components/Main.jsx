import WeatherInfo from "./WeatherInfo";
import Searchbar from "./Searchbar";
import WeatherMoreInfo from "./WeatherMoreInfo";

export default function Main() {
  return (
    <main className="w-full min-h-screen h-screen bg-[#1E213A] md:w-2/5">
      <Searchbar />
      <WeatherInfo />
      <WeatherMoreInfo />
    </main>
  );
}
