export default function Searchbar({ setLat, setLon }) {
  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
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

  return (
    <div className="w-full h-1/7 p-5 text-white flex justify-center items-center">
      <div className="w-full max-w-sm flex justify-between items-center">
        <input
          type="button"
          value="Search for a city..."
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
  );
}
