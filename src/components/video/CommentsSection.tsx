"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown, Reply, MoreVertical } from "lucide-react";
import { Comment } from "../../types/video";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
}

function CommentItem({ comment, isReply = false }: CommentItemProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim()) {
      // Handle reply submission
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className={`space-y-3 ${isReply ? "ml-12" : ""}`}>
      <div className="flex space-x-3">
        <Avatar src={comment.authorAvatar} alt={comment.author} size="sm" />
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-sm text-gray-900 dark:text-white">
              {comment.author}
            </span>
            <span className="text-xs text-gray-500">{comment.timestamp}</span>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300">
            {comment.content}
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-1 text-xs ${
                isLiked ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{comment.likes + (isLiked ? 1 : 0)}</span>
            </button>

            <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-700">
              <ThumbsDown className="w-4 h-4" />
            </button>

            {!isReply && (
              <button
                onClick={() => setShowReplyInput(!showReplyInput)}
                className="text-xs text-gray-500 hover:text-gray-700 font-medium"
              >
                REPLY
              </button>
            )}

            <button className="text-xs text-gray-500 hover:text-gray-700">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          {/* Reply Input */}
          {showReplyInput && (
            <div className="flex space-x-3 mt-3">
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40"
                alt="You"
                size="sm"
              />
              <div className="flex-1 space-y-2">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Add a reply..."
                  className="w-full p-2 border-b border-gray-300 dark:border-gray-600 bg-transparent resize-none focus:outline-none focus:border-blue-500 text-sm"
                  rows={2}
                />
                <div className="flex space-x-2">
                  <Button
                    onClick={() => setShowReplyInput(false)}
                    variant="secondary"
                    size="sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleReply}
                    disabled={!replyText.trim()}
                    size="sm"
                  >
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Show Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-12">
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 font-medium mb-3"
          >
            <Reply className="w-4 h-4" />
            <span>
              {showReplies ? "Hide" : "Show"} {comment.replies.length} replies
            </span>
          </button>

          {showReplies && (
            <div className="space-y-4">
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} isReply />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface CommentsSectionProps {
  comments: Comment[];
  isLoading?: boolean;
  commentsCount: number;
}

export default function CommentsSection({
  comments,
  isLoading,
  commentsCount,
}: CommentsSectionProps) {
  const [commentText, setCommentText] = useState("");
  const [sortBy, setSortBy] = useState("top");

  const handleSubmitComment = () => {
    if (commentText.trim()) {
      // Handle comment submission
      setCommentText("");
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="h-6 bg-gray-200 rounded w-32"></div>
          <div className="h-6 bg-gray-200 rounded w-24"></div>
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex space-x-3 animate-pulse">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Comments Header */}
      <div className="flex items-center space-x-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {commentsCount.toLocaleString()} Comments
        </h3>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-medium text-gray-900 dark:text-white bg-transparent border-none focus:outline-none cursor-pointer"
          >
            <option value="top">Top comments</option>
            <option value="newest">Newest first</option>
          </select>
        </div>
      </div>

      {/* Add Comment */}
      <div className="flex space-x-3">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40"
          alt="You"
          size="sm"
        />
        <div className="flex-1 space-y-3">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-2 border-b border-gray-300 dark:border-gray-600 bg-transparent resize-none focus:outline-none focus:border-blue-500"
            rows={1}
            onFocus={(e) => (e.target.rows = 3)}
            onBlur={(e) => !commentText && (e.target.rows = 1)}
          />

          {commentText && (
            <div className="flex justify-end space-x-2">
              <Button
                onClick={() => setCommentText("")}
                variant="secondary"
                size="sm"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitComment}
                disabled={!commentText.trim()}
                size="sm"
              >
                Comment
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
