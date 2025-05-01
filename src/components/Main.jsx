import WeatherInfo from "./WeatherInfo";
import Searchbar from "./Searchbar";

export default function Main() {
  return (
    <main className="w-full min-h-screen h-screen">
        <Searchbar />
        <WeatherInfo />
    </main>
  )
}
