import { Video, VideoData, ApiResponse } from "@/types/video";
import { mockVideos, mockVideoData } from "@/lib/utils/mockData";

// API Base Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // For development: Mock API calls
  private async mockRequest<T>(
    data: T,
    delay: number = 500
  ): Promise<ApiResponse<T>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data,
          success: true,
          message: "Mock data loaded successfully",
        });
      }, delay);
    });
  }

  async getVideos(): Promise<ApiResponse<Video[]>> {
    try {
      // In production, use: return await this.request<ApiResponse<Video[]>>('/getvideos');
      return await this.mockRequest(mockVideos);
    } catch (error) {
      // Fallback to mock data on error
      console.warn("API call failed, using mock data:", error);
      return await this.mockRequest(mockVideos);
    }
  }

  async getVideoData(videoId?: string): Promise<ApiResponse<VideoData>> {
    try {
      // In production, use: return await this.request<ApiResponse<VideoData>>(`/getvideodata${videoId ? `?id=${videoId}` : ''}`);
      return await this.mockRequest(mockVideoData);
    } catch (error) {
      // Fallback to mock data on error
      console.warn("API call failed, using mock data:", error);
      return await this.mockRequest(mockVideoData);
    }
  }
}

export const apiClient = new ApiClient();
