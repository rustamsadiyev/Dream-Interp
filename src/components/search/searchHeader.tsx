import { useState, ChangeEvent } from "react";
import { Button } from "../ui/button";
import bgImage from "../../../public/assets/bg_image.avif";
import { useGet } from "@/hooks/useGet";
import { useNavigate, useLocation } from "@tanstack/react-router";

export default function SearchHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  // const [multiWordOptions, setMultiWordOptions] = useState<string[]>([]);

  const { data,} = useGet({
    endpoint: "http://192.168.0.49:8014/get_titles",
    queryKey: ["dreams"],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    if (data && Array.isArray(data)) {
      const filtered = value
        ? data.filter(option =>
            [...value].every((char, index) =>
              option[index]?.toLowerCase() === char.toLowerCase()
            )
          )
        : [];
  
      setFilteredOptions(filtered);
  
  //     const multiWord = data.filter(option => option.split(" ").length > 1);
  //     setMultiWordOptions(multiWord);
  // console.log(multiWord);
  
    }
  };

  const handleOptionClick = (option: string) => {
    setSearchTerm(option);
    setFilteredOptions([]);
    navigate({
      to: '/details/$id',
      params: { id: encodeURIComponent(option) },
    });
  };

  return (
    <div className="relative w-full">
      <div
        className="bg-cover bg-center bg-no-repeat w-full flex items-center justify-center min-h-[150px] h-[30vh] md:h-[25vh] lg:h-[35vh]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full max-w-3xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center mb-4 md:mb-6">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold drop-shadow-lg">
              Search for the dream
            </h1>
          </div>
          <div className="bg-whitebg-opacity-70 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg mx-auto w-full max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%]">
            <div className="relative flex items-center space-x-2 ">
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search here..."
                className="p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
              {location.pathname !== "/" && (
                <Button
                  variant="outline"
                  className="shrink-0 px-2 sm:px-3 py-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors"
                  onClick={() => navigate({ to: "/" })}
                >
                  🏠
                </Button>
              )}
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