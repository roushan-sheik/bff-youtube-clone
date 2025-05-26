import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { Video, VideoData } from "@/types/video";

export const useVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: () => apiClient.getVideos(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: 1000,
  });
};

export const useVideoData = (videoId?: string) => {
  return useQuery({
    queryKey: ["videoData", videoId],
    queryFn: () => apiClient.getVideoData(videoId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: 1000,
    enabled: !!videoId, // Only run if videoId is provided
  });
};
