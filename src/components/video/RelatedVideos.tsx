"use client";

import Link from "next/link";
import { Video } from "../../types/video";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

interface RelatedVideoCardProps {
  video: Video;
}

function RelatedVideoCard({ video }: RelatedVideoCardProps) {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    return views.toString();
  };

  return (
    <Link href={`/watch?v=${video.id}`}>
      <div className="flex space-x-3 p-2 rounded-lg hover:bg-gray-100  transition-colors cursor-pointer">
        <div className="relative flex-shrink-0">
          <Image
            width={200}
            height={100}
            src={video.thumbnail}
            alt={video.title}
            className="w-40 h-24 object-cover rounded-lg"
          />
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
            {video.duration}
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <h4 className="text-sm font-medium text-gray-900  leading-5">
            {video.title}
          </h4>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 ">{video.channel}</span>
            {video.verified && (
              <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>{formatViews(video.views)} views</span>
            <span>•</span>
            <span>{video.uploaded}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface RelatedVideosProps {
  videos: Video[];
  isLoading?: boolean;
}

export default function RelatedVideos({
  videos,
  isLoading,
}: RelatedVideosProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900  ">
          Related Videos
        </h3>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex space-x-3 animate-pulse">
              <div className="w-40 h-24 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Related Videos
      </h3>

      <div className="space-y-2">
        {videos.map((video) => (
          <RelatedVideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
