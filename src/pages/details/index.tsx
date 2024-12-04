import { useGet } from "@/hooks/useGet";
import { Route as DetailsRoute } from "@/routes/details.$id";

interface DreamResponse {
  dream: string;
}

const useDream = (dreamName: string) => {
  return useGet({
    endpoint: `https://dreams.loongair.uz/get_dream/${encodeURIComponent(dreamName)}`,
    queryKey: ['dream', dreamName],
  }) as { data: DreamResponse | undefined; error: Error | null; isLoading: boolean };
};

const useTitles = () => {
  return useGet({
    endpoint: "https://dreams.loongair.uz/get_titles",
    queryKey: ["dreams"]
  });
};

export default function DreamDetails() {
  const { id } = DetailsRoute.useParams();
  const dreamName = decodeURIComponent(id);

  const { data: dreamData, error: dreamError, isLoading } = useDream(dreamName);
  const { data: titlesData } = useTitles();

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Error state
  if (dreamError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {dreamError.message}</p>
      </div>
    );
  }

  // Main content
  return (
    <div className="container mx-auto lg:w-[1250px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{dreamName}</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {dreamData?.dream ? (
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">
              {dreamData.dream}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-500">No dream interpretation available</p>
        )}
      </div>
    </div>
  );
}
