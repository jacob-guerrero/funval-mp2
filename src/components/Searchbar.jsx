export default function Searchbar() {
  return (
    <div className="w-full h-1/7 p-5 text-white flex justify-center items-center">
      <div className="w-full max-w-sm flex justify-between items-center">
        <input
          type="button"
          value="Search for a city..."
          className="w-3/4 max-w-3xs bg-gray-500 border border-gray-300 rounded-lg p-2 hover:cursor-pointer"
        />

        <div className="flex items-center justify-center w-10 h-10 bg-[#ffffff33] rounded-full cursor-pointer">
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
