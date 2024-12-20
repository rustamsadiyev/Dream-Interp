import { useState, ChangeEvent, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import bgImage from "../../../public/assets/bg_image.avif";
import axios from "axios";
import { useNavigate, useLocation } from "@tanstack/react-router";

const TITLES_STORAGE_KEY = 'dreamTitles';
const TITLES_CACHE_TIME = 10 * 24 * 60 * 60 * 1000;

export default function SearchHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const cachedData = localStorage.getItem(TITLES_STORAGE_KEY);
        if (cachedData) {
          const { titles, timestamp } = JSON.parse(cachedData);
          if (Date.now() - timestamp < TITLES_CACHE_TIME) {
            setTitles(titles);
            return;
          }
        }

        const response = await axios.get("https://dreams.loongair.uz/get_titles", {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          withCredentials: false
        });

        const newTitles = response.data;
        setTitles(newTitles);

        // Cache the new titles with timestamp
        localStorage.setItem(TITLES_STORAGE_KEY, JSON.stringify({
          titles: newTitles,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.error('Failed to fetch titles:', error);
        // If fetch fails, try to use cached data even if expired
        const cachedData = localStorage.getItem(TITLES_STORAGE_KEY);
        if (cachedData) {
          const { titles } = JSON.parse(cachedData);
          setTitles(titles);
        }
      }
    };

    fetchTitles();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setFilteredOptions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    if (titles.length > 0) {
      const filtered = value
        ? titles.filter(option =>
            [...value].every((char, index) =>
              option[index]?.toLowerCase() === char.toLowerCase()
            )
          )
        : [];
  
      setFilteredOptions(filtered);
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

  const handleHomeClick = () => {
    setSearchTerm("");
    setFilteredOptions([]);
    navigate({ to: "/" });
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
          <div ref={searchContainerRef} className="bg-whitebg-opacity-70 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg mx-auto w-full max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%]">
            <div className="relative flex items-center space-x-2">
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
                  onClick={handleHomeClick}
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