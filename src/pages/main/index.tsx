import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import infoImg from "../../../public/assets/reason.jpg";
import { Button } from "@/components/ui/button";

export default function MainPage() {
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    const storedTitles = localStorage.getItem("titles");
    if (storedTitles) {
      setTitles(JSON.parse(storedTitles));
    }
  }, []);

  return (
    <>
      <div className="w-full h-full bg-pink-100">
        <div className="container w-full max-w-[1250px] mx-auto p-4 md:p-8">
          <div className="w-full h-48 md:h-72 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
            <img
              src={infoImg}
              className="object-cover w-full h-full"
              alt="Background Image"
            />
            <Button 
              className="absolute left-1/2 transform -translate-x-1/2 px-3 py-2 md:px-4 md:py-3 text-base md:text-xl font-semibold bg-green-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Nega tush ko'ramiz?
            </Button>
          </div>
          
          {/* Card Section */}
          <div className="mt-4 md:mt-8">
            <Card className="p-4 md:p-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                  Asosiy Tushlar ro'yxati
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-yellow-200">
                  Discover dynamic data with interactive animations and stylish UI design.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                {/* Data List with Animation */}
                <div className="space-y-2 md:space-y-3">
                  {titles.length > 0 ? (
                    titles.map((title, index) => (
                      <div
                        key={index}
                        className="bg-white text-gray-800 p-3 md:p-4 rounded-lg shadow hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                      >
                        <p className="text-base md:text-xl font-medium">{title}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-base md:text-lg italic">
                      No data available. Try adding data to local storage.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}