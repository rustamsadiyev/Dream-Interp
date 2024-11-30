import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { staticDreamTitles } from "@/components/staticData/staticTitle";
import { useNavigate } from "@tanstack/react-router";

export default function MainDreams() {

    const naviogate = useNavigate();
    
  const handleTitleClick = (url: string) => {
    naviogate({ to: url });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


    return (
        <>
        
        <Card className="p-4 md:p-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                Most common dreams
              </CardTitle>
              <CardDescription className="text-base md:text-lg text-yellow-200">
                Pay attention to your dreams; they are a blessing!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-lg md:text-xl">Click on a dream to learn its meaning:</p>
              </div>
              <div className="space-y-2 md:space-y-3">
                {staticDreamTitles
                .map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleTitleClick(item.url)}
                    className="bg-white text-gray-800 p-3 md:p-4 rounded-lg shadow hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
                  >
                    <p className="text-base md:text-xl font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>            
        </>
    );
}