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
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
