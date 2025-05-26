"use client";

import { useState } from "react";
import { MoreVertical, CheckCircle } from "lucide-react";
import { Video } from "@/types/video";
import { formatViews } from "@/lib/utils/formatters";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail Container */}
      <div className="relative mb-3 rounded-xl overflow-hidden bg-gray-100">
        <div className="aspect-video w-full">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://via.placeholder.com/320x180/f3f4f6/6b7280?text=Video+Thumbnail";
            }}
          />
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          {video.duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="flex space-x-3">
        {/* Channel Avatar */}
        <div className="flex-shrink-0 mt-1">
          <Avatar src={video.channelAvatar} alt={video.channel} size="md" />
        </div>

        {/* Video Details */}
        <div className="flex-1 min-w-0">
          <h3
            className={`text-sm font-medium text-gray-900 line-clamp-2 leading-5 mb-1 transition-colors ${
              isHovered ? "font-semibold" : ""
            }`}
          >
            {video.title}
          </h3>

          <div className="flex items-center space-x-1 mb-1">
            <p className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
              {video.channel}
            </p>
            {video.verified && (
              <CheckCircle className="w-3 h-3 text-gray-600" />
            )}
          </div>

          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span>{formatViews(video.views)}</span>
            <span>•</span>
            <span>{video.uploaded}</span>
          </div>
        </div>

        {/* More Options */}
        <div className="flex-shrink-0">
          <Button
            variant="icon"
            className={`opacity-0 group-hover:opacity-100 transition-opacity ${
              isHovered ? "opacity-100" : ""
            }`}
          >
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
