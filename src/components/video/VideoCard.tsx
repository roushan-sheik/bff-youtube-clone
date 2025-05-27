"use client";

import Link from "next/link";
import { Video } from "../../types/video";
import { Avatar } from "../ui/Avatar";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    return views.toString();
  };

  return (
    <Link href={`/watch?v=${video.id}`} className="block group">
      <div className="space-y-3">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />

          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>

        {/* Video Info */}
        <div className="flex space-x-3">
          {/* Channel Avatar */}
          <div className="flex-shrink-0 pt-1">
            <Avatar src={video.channelAvatar} alt={video.channel} size="sm" />
          </div>

          {/* Video Details */}
          <div className="flex-1 min-w-0 space-y-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {video.title}
            </h3>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                {video.channel}
              </span>
              {video.verified && (
                <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <span>{formatViews(video.views)} views</span>
              <span>•</span>
              <span>{video.uploaded}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
