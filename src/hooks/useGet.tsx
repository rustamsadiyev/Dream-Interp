import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface UseGetProps {
  endpoint: string;
  queryKey: string[];
}

export const useGet = ({ endpoint, queryKey }: UseGetProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const response = await axios.get(endpoint)
        .then(response => response.data);
      return response;
    },
    staleTime: 6000,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  return { data, error, isLoading };
};
