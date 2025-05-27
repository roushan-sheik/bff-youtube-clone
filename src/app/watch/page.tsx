"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import VideoPlayer from "../../components/video/VideoPlayer";
import VideoInfo from "../../components/video/VideoInfo";
import CommentsSection from "../../components/video/CommentsSection";
import RelatedVideos from "../../components/video/RelatedVideos";

import { ErrorMessage } from "@/components/common/ErrorMessage";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import {
  useRelatedVideos,
  useVideoComments,
  useVideoData,
} from "@/lib/hooks/useVideoData";

import { Header } from "@/components/layout/Header";

function WatchPageContent() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");

  const {
    data: videoResponse,
    isLoading: isVideoLoading,
    error: videoError,
  } = useVideoData(videoId || undefined);

  const { data: commentsResponse, isLoading: isCommentsLoading } =
    useVideoComments(videoId || "");

  const { data: relatedResponse, isLoading: isRelatedLoading } =
    useRelatedVideos(videoId || "");

  if (!videoId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage message="Video ID is required" />
      </div>
    );
  }

  if (videoError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage message="Failed to load video" />
      </div>
    );
  }

  // Extract actual data from the API response
  const videoData = videoResponse || videoResponse;
  const comments = commentsResponse?.data || [];
  const relatedVideos = relatedResponse?.data || relatedResponse || [];

  // Mock video for player since we don't have real video URLs
  const mockVideo = {
    id: videoId,
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    title: videoData?.title || "Loading...",
    videoUrl: videoData?.videoUrl,
  };

  return (
    <div>
      <div className="mb-[59px]">
        <Header />
      </div>
      <div className="min-h-screen bg-white ">
        <div className="lg:w-[78%] w-full mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="w-full">
                <VideoPlayer
                  videoUrl={mockVideo.videoUrl}
                  thumbnail={mockVideo.thumbnail}
                  title={mockVideo.title}
                />
              </div>

              {/* Video Info */}
              <VideoInfo
                videoData={
                  videoData || {
                    title: "Loading...",
                    views: 0,
                    likes: 0,
                    uploaded: "",
                    channel: "Loading...",
                    subscribers: 0,
                  }
                }
                isLoading={isVideoLoading}
              />

              {/* Comments Section */}
              <div className="border-t border-gray-200  pt-6">
                <CommentsSection
                  comments={comments}
                  isLoading={isCommentsLoading}
                  commentsCount={comments.length}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <RelatedVideos
                  videos={relatedVideos}
                  isLoading={isRelatedLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WatchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      <WatchPageContent />
    </Suspense>
  );
}
