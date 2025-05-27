import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";

export const useVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: () => apiClient.getVideos(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: 1000,
  });
};
