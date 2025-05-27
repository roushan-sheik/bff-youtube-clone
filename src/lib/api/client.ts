/* eslint-disable @typescript-eslint/no-unused-vars */
import { Video, VideoData, Comment, ApiResponse } from "@/types/video";

import { mockComments } from "../utils/mockComments";
import { mockVideoData } from "../utils/mockVideoData";
import { mockVideos } from "../utils/mockVideos";

// API Base Configuration
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://youtube-bff.onrender.com";

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
      return await this.request<ApiResponse<Video[]>>("/getvideos");
    } catch (error) {
      // Fallback to mock data on error
      console.warn("API call failed, using mock data:", error);
      return await this.mockRequest(mockVideos);
    }
  }

  async getVideoData(videoId?: string): Promise<ApiResponse<VideoData>> {
    try {
      return await this.request<ApiResponse<VideoData>>(
        `/getvideodata${videoId ? `?id=${videoId}` : ""}`
      );
      // return await this.mockRequest(mockVideoData);
    } catch (error) {
      // Fallback to mock data on error
      console.warn("API call failed, using mock data:", error);
      return await this.mockRequest(mockVideoData);
    }
  }

  async getVideoComments(videoId: string): Promise<ApiResponse<Comment[]>> {
    try {
      //  return await this.request<ApiResponse<Comment[]>>(`/getcomments?videoId=${videoId}`);
      return await this.mockRequest(mockComments, 800);
    } catch (error) {
      // Fallback to mock data on error
      console.warn("API call failed, using mock data:", error);
      return await this.mockRequest(mockComments, 800);
    }
  }

  async getRelatedVideos(videoId: string): Promise<ApiResponse<Video[]>> {
    try {
      return await this.request<ApiResponse<Video[]>>("/getvideos");
      // const related = mockVideos.slice(0, 10);
      // return await this.mockRequest(related, 600);
    } catch (error) {
      // Fallback to mock data on error
      console.warn("API call failed, using mock data:", error);
      const related = mockVideos.slice(0, 10);
      return await this.mockRequest(related, 600);
    }
  }
}

export const apiClient = new ApiClient();
