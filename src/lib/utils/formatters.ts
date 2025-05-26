export const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M views`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K views`;
  }
  return `${views} views`;
};

export const formatSubscribers = (subscribers: number): string => {
  if (subscribers >= 1000000) {
    return `${(subscribers / 1000000).toFixed(1)}M subscribers`;
  } else if (subscribers >= 1000) {
    return `${(subscribers / 1000).toFixed(1)}K subscribers`;
  }
  return `${subscribers} subscribers`;
};

export const formatLikes = (likes: number): string => {
  if (likes >= 1000000) {
    return `${(likes / 1000000).toFixed(1)}M`;
  } else if (likes >= 1000) {
    return `${(likes / 1000).toFixed(1)}K`;
  }
  return likes.toString();
};

export const cn = (
  ...classes: (string | undefined | null | boolean)[]
): string => {
  return classes.filter(Boolean).join(" ");
};
