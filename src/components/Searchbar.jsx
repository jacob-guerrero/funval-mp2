export default function Searchbar() {
  return (
    <div className="flex justify-between items-center p-5 text-white">
      <input
        type="button"
        value="Search for a city..."
        className="w-3/4 bg-gray-500 border border-gray-300 rounded-lg p-2 hover:cursor-pointer"
      />

      <div class="flex items-center justify-center w-10 h-10 bg-[#ffffff33] rounded-full cursor-pointer">
        <img
          alt="location icon"
          src="/icons/location.svg"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}
