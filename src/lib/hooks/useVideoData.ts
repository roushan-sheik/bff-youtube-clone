import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";

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

export const useVideoComments = (videoId: string) => {
  return useQuery({
    queryKey: ["videoComments", videoId],
    queryFn: () => apiClient.getVideoComments(videoId),
    staleTime: 2 * 60 * 1000, // 2 minutes
    retry: 2,
    enabled: !!videoId,
  });
};

export const useRelatedVideos = (videoId: string) => {
  return useQuery({
    queryKey: ["relatedVideos", videoId],
    queryFn: () => apiClient.getRelatedVideos(videoId),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
    enabled: !!videoId,
  });
};

export const useVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: () => apiClient.getVideos(),
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};
