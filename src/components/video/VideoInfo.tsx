"use client";

import { useState } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Share,
  Download,
  MoreHorizontal,
  Bell,
  Check,
} from "lucide-react";
import { VideoData } from "../../types/video";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";

interface VideoInfoProps {
  videoData: VideoData;
  isLoading?: boolean;
}

export default function VideoInfo({ videoData, isLoading }: VideoInfoProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-32"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="h-10 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-10 w-24 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="space-y-4">
      {/* Video Title */}
      <h1 className="text-xl font-semibold text-gray-900  ">
        {videoData.title}
      </h1>

      {/* Video Stats and Actions */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 ">
          <span>{formatNumber(videoData.views)} views</span>
          <span>•</span>
          <span>{videoData.uploaded}</span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Like/Dislike */}
          <div className="flex items-center bg-gray-100 cursor-pointer rounded-full overflow-hidden">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-200   transition-colors ${
                isLiked ? "text-blue-600" : "text-gray-700  "
              }`}
            >
              <ThumbsUp className="w-5 h-5" />
              <span className="text-sm font-medium">
                {formatNumber(videoData.likes + (isLiked ? 1 : 0))}
              </span>
            </button>
            <div className="w-px h-6 bg-gray-300  "></div>
            <button
              onClick={handleDislike}
              className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-200  transition-colors ${
                isDisliked ? "text-blue-600" : "text-gray-700 "
              }`}
            >
              <ThumbsDown className="w-5 h-5" />
            </button>
          </div>

          {/* Share */}
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center space-x-2"
          >
            <Share className="w-5 h-5" />
            <span>Share</span>
          </Button>

          {/* Download */}
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </Button>

          {/* More */}
          <Button variant="secondary" size="sm">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Channel Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40"
            alt={videoData.channel}
            size="lg"
          />
          <div>
            <h3 className="font-semibold text-gray-900 ">
              {videoData.channel}
            </h3>
            <p className="text-sm text-gray-600  ">
              {formatNumber(videoData.subscribers)} subscribers
            </p>
          </div>
        </div>

        <Button
          onClick={handleSubscribe}
          variant={isSubscribed ? "secondary" : "primary"}
          className={`flex items-center space-x-2 ${
            isSubscribed ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : ""
          }`}
        >
          {isSubscribed ? (
            <>
              <Check className="w-4 h-4" />
              <span>Subscribed</span>
            </>
          ) : (
            <>
              <Bell className="w-4 h-4" />
              <span>Subscribe</span>
            </>
          )}
        </Button>
      </div>

      {/* Description */}
      {videoData.description && (
        <div className="bg-gray-100   rounded-lg p-4">
          <div className="text-sm text-gray-700   whitespace-pre-wrap">
            {showFullDescription
              ? videoData.description
              : truncateDescription(videoData.description, 200)}
          </div>
          {videoData.description.length > 200 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {showFullDescription ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
