import { getActiveCategory } from "../scripts/utils/get-active-category.js";

class Video {
  constructor(item) {
    this.id = item.id;
    this.title = item.snippet.title;
    this.description = item.snippet.description;
    this.videoUrl = `https://www.youtube.com/embed/${item.id}`;
    this.channelId = item.snippet.channelId;
    this.thumbnail = item.snippet.thumbnails.high.url;
    this.uploaded = item.snippet.publishedAt;
    this.views = Number(item.statistics.viewCount);
    this.duration = item.contentDetails.duration;
    this.category = item.snippet.categoryId;
    this.likes = Number(item.statistics.likeCount);
    this.comments = Number(item.statistics.commentCount);
    // Youtube does't provide this so i kept it with my custom design 
    this.bgColor = "#fce4ec";
    this.stateColor = "#ad1457";
    this.type = "music";
  }
};

export let videos = [];

loadVideoFetch().then(data => {
  data.items.forEach( item => {
    videos.unshift(new Video(item));
  })
});

async function loadVideoFetch() {
  const apiKey = 'AIzaSyC4IVkzcsid2yPUn8vLUpUyj6lyEjJpKz4';
  const part = 'snippet,statistics,contentDetails'
  const url = `https://www.googleapis.com/youtube/v3/videos?part=${part}&chart=mostPopular&maxResult=10&regionCode=BD&key=${apiKey}`;

  const respons = await fetch(url);
  const data = await respons.json();
  return data;
};

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
};