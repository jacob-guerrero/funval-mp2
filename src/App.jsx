import Forecast from "./components/Forecast";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-[#100E1D] w-screen min-h-screen flex flex-col items-center md:flex-row md:items-start">
      <Main />
      <Forecast />
    </div>
  );
}

export default App;
