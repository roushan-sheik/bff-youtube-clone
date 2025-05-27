import { Video } from "@/types/video";

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "Building a Modern Web Application with Next.js 14",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=320",
    views: 125000,
    uploaded: "2 days ago",
    channel: "Tech Tutorials",
    channelAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40",
    duration: "15:42",
    verified: true,
  },
  {
    id: "2",
    title: "React Hooks Explained - Complete Guide for Beginners",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=320",
    views: 89000,
    uploaded: "1 week ago",
    channel: "Code Academy",
    channelAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40",
    duration: "22:15",
    verified: false,
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox - When to Use Which?",
    thumbnail:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=320",
    views: 56000,
    uploaded: "3 days ago",
    channel: "Design Masters",
    channelAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40",
    duration: "18:30",
    verified: true,
  },
  // Add more mock videos...
  {
    id: "4",
    title: "JavaScript ES6+ Features You Should Know",
    thumbnail:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=320",
    views: 203000,
    uploaded: "5 days ago",
    channel: "JS Mastery",
    channelAvatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40",
    duration: "25:18",
    verified: true,
  },
];
