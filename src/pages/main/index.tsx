import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import infoImg from "../../../public/assets/reason.jpg";
import { Button } from "@/components/ui/button";
import { useGet } from "@/hooks/useGet";
import { useNavigate } from "@tanstack/react-router";
import { whyDream } from "@/components/staticData/staticTitle";
import MainDreams from "@/components/mainDreams";

export default function MainPage() {
  const naviogate = useNavigate();

  const handleWhyDream = () => {
    naviogate({ to: whyDream.url });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { data} = useGet({
    endpoint: "http://192.168.0.49:8014/get_titles",
    queryKey: ["dreams"],
  });

  // if (error) return <p>{error.message}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="p-4 md:p-6 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                Dream Interpretation
              </CardTitle>
              <CardDescription className="text-base md:text-lg text-gray-600">
                Explore the meaning behind your dreams with our comprehensive guide.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img src={infoImg} alt="Dream Info" className="w-full h-auto rounded-lg shadow-md" />
              <div className="flex justify-center " >
              <Button onClick={() => handleWhyDream()} variant={"green"} className="mt-10 p-6 w-[80vw] " >
              Why do we dream?
            </Button>
                </div>

            </CardContent>

          </Card>
        <MainDreams></MainDreams>

        </div>
      </div>
    </div>
  );
}