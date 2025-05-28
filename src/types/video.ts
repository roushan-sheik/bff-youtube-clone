export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  views: number;
  uploaded: string;
  channel: string;
  channelAvatar?: string;
  duration: string;
  verified?: boolean;
}

export interface VideoData {
  title: string;
  views: number;
  likes: number;
  uploaded: string;
  channel: string;
  subscribers: number;
  description?: string;
  dislikes?: number;
  videoUrl?: string;
}

export interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  likes: number;
  timestamp: string;
  replies?: Comment[];
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
