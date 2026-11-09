import { getActiveCategory } from "../scripts/utils/get-active-category.js";

export const videos = [
  {
    id: "video-001",
    title: "HTML & CSS Full Course - Beginner to Pro",
    description: "Learn HTML and CSS by building real websites.",
    videoUrl: "https://www.youtube.com/embed/G3e-cpL7ofc",
    channelId: "channel-001",
    thumbnail: "images/thumbnails/video-001.jpg",
    uploaded: "2 years ago",
    views: 19000000,
    duration: "6:31:00",
    bgColor: "#e8eaf6",
    stateColor: "#3949ab",
    type: "video",
    category: "Education",
    likes: 850000,
    commentId: "comment-001",
    comments: 12500
  },
  {
    id: "video-002",
    title: "JavaScript Tutorial Full Course - Beginner to Pro",
    description: "Learn JavaScript fundamentals and build projects.",
    videoUrl: "https://www.youtube.com/embed/EerdGm-ehJQ",
    channelId: "channel-001",
    thumbnail: "images/thumbnails/video-002.jpg",
    uploaded: "2 years ago",
    views: 9500000,
    duration: "22:15:56",
    bgColor: "#fff3cd",
    stateColor: "#856404",
    type: "video",
    category: "Education",
    likes: 620000,
    commentId: "comment-002",
    comments: 9800
  },
  {
    id: "video-003",
    title: "Learn JavaScript - Full Course for Beginners",
    description: "Practice JavaScript through beginner-friendly lessons.",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
    channelId: "channel-002",
    thumbnail: "images/thumbnails/video-003.jpg",
    uploaded: "3 years ago",
    views: 7000000,
    duration: "3:26:43",
    bgColor: "#e0f2f1",
    stateColor: "#00796b",
    type: "video",
    category: "Education",
    likes: 410000,
    commentId: "comment-003",
    comments: 7200
  },
  {
    id: "video-004",
    title: "Ubuntu + XFCE Desktop on Android with Termux",
    description: "Explore a Linux desktop running on an Android phone.",
    videoUrl: "https://www.youtube.com/embed/Qb9mysrFrfs",
    channelId: "channel-003",
    thumbnail: "images/thumbnails/video-004.jpg",
    uploaded: "6 months ago",
    views: 2000,
    duration: "12:45",
    bgColor: "#fbe9e7",
    stateColor: "#d84315",
    type: "video",
    category: "Tech",
    likes: 145,
    commentId: "comment-004",
    comments: 32
  },
  {
    id: "video-005",
    title: "Build a YouTube Clone with HTML and CSS",
    description: "Recreate a familiar video platform layout from scratch.",
    videoUrl: "https://www.youtube.com/embed/rhPSo4_Tgi0",
    channelId: "channel-001",
    thumbnail: "images/thumbnails/video-005.jpg",
    uploaded: "1 year ago",
    views: 850000,
    duration: "35:20",
    bgColor: "#f3e5f5",
    stateColor: "#8e24aa",
    type: "video",
    category: "Education",
    likes: 52000,
    commentId: "comment-005",
    comments: 1100
  },
  {
    id: "video-006",
    title: "Minecraft Survival: Starting from Zero",
    description: "Begin a new survival world and build a starter base.",
    videoUrl: "https://www.youtube.com/embed/GHjeObM0mUY",
    channelId: "channel-004",
    thumbnail: "images/thumbnails/video-006.jpg",
    uploaded: "5 days ago",
    views: 420000,
    duration: "24:18",
    bgColor: "#e8f5e9",
    stateColor: "#2e7d32",
    type: "video",
    category: "Gaming",
    likes: 28000,
    commentId: "comment-006",
    comments: 850
  },
  {
    id: "video-007",
    title: "Naruto: The Journey of a Shinobi",
    description: "An anime discussion about perseverance and growth.",
    videoUrl: "https://www.youtube.com/embed/krBLq8TnsOg",
    channelId: "channel-005",
    thumbnail: "images/thumbnails/video-007.jpg",
    uploaded: "2 weeks ago",
    views: 120000,
    duration: "14:32",
    bgColor: "#fce4ec",
    stateColor: "#c2185b",
    type: "video",
    category: "Anime",
    likes: 9500,
    commentId: "comment-007",
    comments: 420
  },
  {
    id: "video-008",
    title: "JavaScript Array Methods Explained",
    description: "Understand find, filter, map, and their use cases.",
    videoUrl: "https://www.youtube.com/embed/Urwzk6ILvPQ",
    channelId: "channel-002",
    thumbnail: "images/thumbnails/video-008.jpg",
    uploaded: "1 month ago",
    views: 310000,
    duration: "18:42",
    bgColor: "#e1f5fe",
    stateColor: "#0277bd",
    type: "video",
    category: "Education",
    likes: 18000,
    commentId: "comment-008",
    comments: 650
  },
  {
    id: "video-009",
    title: "Ed Sheeran - Perfect",
    description: "Ed Sheeran's romantic song, Perfect.",
    videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    channelId: "channel-006",
    thumbnail: "images/thumbnails/video-009.jpg",
    uploaded: "8 years ago",
    views: 4000000000,
    duration: "4:40",
    bgColor: "#fce4ec",
    stateColor: "#ad1457",
    type: "music",
    category: "Music",
    likes: 28000000,
    commentId: "comment-009",
    comments: 1200000
  }
];

const searchedVideos = loadSearchedVideo();

function loadSearchedVideo() {
  let matchingVideo = [];

  const url = new URLSearchParams(window.location.search);
  let searchParams = url.get('search');

  if(searchParams === null) {
    return null;
  } 
  const search = searchParams.trim().toLowerCase();
  if(search === '') {
    return null
  }
  
  matchingVideo = videos.filter(video => {
  return video.title.toLowerCase().includes(search)
  });

  return matchingVideo;
};

export function loadSuggestedVideo(category) {
  return videos.filter(video => {
    if(category !== 'All') {
      return video.category.toLowerCase() === category.toLowerCase()
    } 
    return true;
  })
};

export function loadVideos() {
  if(searchedVideos !== null) {
    return searchedVideos;
  } else {
    return loadSuggestedVideo(getActiveCategory());
  }
  return videos

};

export function getVideo(videoId) {
  let matchingVideo;
  videos.forEach(video => {
    if(videoId === video.id) {
      matchingVideo = video;
    }
  });
  return matchingVideo;
}
console.log(loadVideos());