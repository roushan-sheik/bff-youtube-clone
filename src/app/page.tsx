"use client";

import { Layout } from "@/components/layout/Layout";
import { VideoGrid } from "@/components/video/VideoGrid";
import { VideoGridSkeleton } from "@/components/common/LoadingSpinner";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import { useVideos } from "@/lib/hooks/useVideos";

export default function HomePage() {
  const { data: videosResponse, isLoading, error, refetch } = useVideos();

  const videos = videosResponse?.data || [];

  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto">
        {/* Category Pills */}
        <div className="flex space-x-3 mb-6 overflow-x-auto scrollbar-hide">
          {[
            "All",
            "JavaScript",
            "React",
            "Python",
            "AI",
            "Web Development",
            "Programming",
            "Technology",
            "Tutorial",
            "Database",
          ].map((category) => (
            <button
              key={category}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Content */}
        {isLoading && <VideoGridSkeleton count={12} />}

        {error && (
          <ErrorMessage
            message="Failed to load videos. Please check your connection and try again."
            onRetry={() => refetch()}
          />
        )}

        {!isLoading && !error && videos.length > 0 && (
          <VideoGrid videos={videos} />
        )}

        {!isLoading && !error && videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No videos available at the moment.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
