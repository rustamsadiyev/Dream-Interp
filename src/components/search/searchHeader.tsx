import { useState, ChangeEvent } from "react";
import { Button } from "../ui/button";
import bgImage from "../../../public/assets/bg_image.avif";

export default function SearchHeader() {
  const options: string[] = [
    "Balandlik", "Hayvonlar", "Orzular ortidan quvlash", 
    "Soxta reallik", "Sevimli inson", "O'tmish", "Qo'rquv"
  ];
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredOptions(
      value ? options.filter(option => option.toLowerCase().startsWith(value.toLowerCase())) : []
    );
  };

  const handleOptionClick = (option: string) => {
    setSearchTerm(option);
    setFilteredOptions([]);
  };

  localStorage.setItem("titles", JSON.stringify(options));

  return (
    <div className="relative w-full">
      <div
        className="bg-cover bg-center bg-no-repeat w-full flex items-center justify-center   min-h-[200px] h-[40vh] md:h-[35vh] lg:h-[50vh]"
        style={{ backgroundImage: `url(${ bgImage})`}}
      >
        <div className="w-full max-w-3xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center mb-4 md:mb-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
              Search for the dream
            </h1>
          </div>
          <div className="bg-white bg-opacity-70 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg mx-auto w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
            <div className="relative flex items-center space-x-2">
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search here..."
                className="p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
              <Button
                variant="outline"
                className="shrink-0 px-2 sm:px-3 py-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors"
              >
                🔎
              </Button>
            </div>
            
            {filteredOptions.length > 0 && (
              <div className="absolute z-50 left-0 right-0 bg-white border border-gray-300 rounded-lg mt-2 max-h-[40vh] overflow-auto shadow-xl mx-4">
                {filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="p-2 sm:p-3 hover:bg-blue-100 cursor-pointer text-sm sm:text-base transition-colors"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}