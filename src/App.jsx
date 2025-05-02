import Footer from "./components/Footer";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-[#1E213A] w-full min-h-screen flex flex-col items-center md:flex-row md:items-start font-weather">
      <Main />
      <div className="bg-[#100E1D] w-full flex flex-col gap-8 md:w-3/5">
        <Forecast />
        <Highlights />
        <Footer />
      </div>
    </div>
  );
}

export default App;
