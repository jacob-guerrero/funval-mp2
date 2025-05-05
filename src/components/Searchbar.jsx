import { useState } from "react";

export default function Searchbar({ setLat, setLon }) {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (error) => {
        console.error("Geolocation error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=3&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setSearchResults(data))
      .catch((err) => console.error("City search failed:", err));
  };

  const handleCitySelect = (city) => {
    setLat(city.lat);
    setLon(city.lon);
    setShowModal(false); // Close modal
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      <div className="w-full h-1/7 p-5 text-white flex justify-center items-center">
        <div className="w-full max-w-sm flex justify-between items-center">
          <input
            type="button"
            value="Search for a city..."
            onClick={() => setShowModal(true)}
            className="w-3/4 max-w-3xs bg-gray-500 border border-gray-300 rounded-lg p-2 hover:cursor-pointer"
          />

          <div
            onClick={handleUseCurrentLocation}
            className="flex items-center justify-center w-10 h-10 bg-[#ffffff33] rounded-full cursor-pointer"
          >
            <img
              alt="location icon"
              src="/icons/location.svg"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="absolute top-0 left-0 w-full h-full bg-[#1E213A] z-50 flex flex-col items-center justify-start p-6 md:w-2/5">
          <button
            onClick={() => setShowModal(false)}
            className="text-sm text-gray-400 self-end pb-4 cursor-pointer"
          >
            <img src="/icons/close.svg" alt="close" className="w-6" />
          </button>

          <div className="w-full max-w-md">
            <div className="flex mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter city name"
                className="w-full p-3 rounded-l bg-gray-700 text-white border border-gray-500"
              />
              <button
                onClick={handleSearch}
                className="bg-yellow-400 text-black px-4 rounded-r cursor-pointer"
              >
                Search
              </button>
            </div>

            <div className="text-white">
              {searchResults.length === 0 && (
                <p className="text-gray-400">No results yet.</p>
              )}
              {searchResults.map((city, index) => (
                <div
                  key={index}
                  onClick={() => handleCitySelect(city)}
                  className="p-3 bg-gray-600 mb-2 rounded cursor-pointer hover:bg-gray-500"
                >
                  {city.name}, {city.country}
                  {city.state ? ` - ${city.state}` : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
