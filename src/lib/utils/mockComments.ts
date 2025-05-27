import { Comment } from "@/types/video";

export const mockComments: Comment[] = [
  {
    id: "1",
    author: "DevExpert",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40",
    content:
      "Great tutorial! Really helped me understand the new App Router in Next.js 14.",
    likes: 45,
    timestamp: "2 hours ago",
    replies: [
      {
        id: "1-1",
        author: "Tech Tutorials",
        authorAvatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40",
        content: "Thanks! Glad it was helpful.",
        likes: 12,
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: "2",
    author: "CodeNewbie",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40",
    content:
      "This is exactly what I was looking for. The explanations are clear and easy to follow.",
    likes: 32,
    timestamp: "4 hours ago",
  },
  {
    id: "3",
    author: "WebDeveloper",
    authorAvatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40",
    content: "Could you make a follow-up video on deployment strategies?",
    likes: 28,
    timestamp: "6 hours ago",
  },
];
