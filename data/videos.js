import { getActiveCategory } from "../scripts/utils/get-active-category.js";
import { formatUploaded } from "../scripts/utils/format-uploaded.js";
import { formatIsoDuration } from "../scripts/utils/format-duration.js";
formatIsoDuration

class Video {
  constructor(item) {
    this.id = item.id;
    this.title = item.snippet.title;
    this.description = item.snippet.description;
    this.videoUrl = `https://www.youtube.com/embed/${item.id}`;
    this.channelId = item.snippet.channelId;
    this.thumbnail = item.snippet.thumbnails.high.url;
    this.uploaded = formatUploaded(item.snippet.publishedAt);
    this.views = Number(item.statistics.viewCount);
    this.duration = formatIsoDuration(item.contentDetails.duration);
    // this.category = item.snippet.categoryId;
    //youtube provide category as id or number
    this.category = 'All';
    this.likes = Number(item.statistics.likeCount);
    this.comments = Number(item.statistics.commentCount);
    // Youtube does't provide this so i kept it with my custom design 
    this.bgColor = "#fce4ec";
    this.stateColor = "#ad1457";
    this.type = "music";
  }
};

export let videos = [];
export let searchedVideos = [];

loadSearchedVideo().then( items => {
  items.map( item => {
    searchedVideos.unshift(new Video(item));
  })
})

export async function loadVideoFetch() {
try {
  const apiKey = 'AIzaSyC4IVkzcsid2yPUn8vLUpUyj6lyEjJpKz4';
  const part = 'snippet,statistics,contentDetails'
  const url = `https://www.googleapis.com/youtube/v3/videos?part=${part}&chart=mostPopular&maxResults=50&regionCode=BD&key=${apiKey}`;

  const respons = await fetch(url);
  const data = await respons.json();
  data.items.forEach( item => {
    videos.unshift(new Video(item));
  });
} catch(error) {
  console.log(`Error from loadVideoFetch,Error code: ${error}`)
}
};

export async function loadSearchedVideo() {
try {
  const videosId = await loadSearchedVideoId();
  if(videosId === null || !videosId) {
    return null;
  }
  const req = videosId.map( id => {
    return getVideoFetch(id);
  });

  return await Promise.all(req);
} catch (error) {
  console.log(`Error from loadSeachedVideo, Error code: ${error}`)
}
};

async function loadSearchedVideoId() {
try {
  let matchingVideoId = [];
  const url = new URLSearchParams(window.location.search);
  let searchParams = url.get('search');

  if(searchParams === null) {
    return null;
  } 
  const search = searchParams.trim().toLowerCase();
  if(search === '') {
    return null;
  }
  
  const apiKey = 'AIzaSyC4IVkzcsid2yPUn8vLUpUyj6lyEjJpKz4';
  const part = 'snippet'
  const fetchUrl = `https://www.googleapis.com/youtube/v3/search?part=${part}&q=${encodeURIComponent(search)}&maxResults=20&key=${apiKey}`;

  const respons = await fetch(fetchUrl);
  const data = await respons.json();

  const allId = data.items.map(item => {
    return item.id.videoId;
  });

  matchingVideoId = allId.filter(id => id !== undefined);
  return matchingVideoId;
} catch(error) {
  console.log(`Error from loadSearchedVideoId, Error code: ${error}`)
}
};

async function getVideoFetch(id) {
try {
  const apiKey = 'AIzaSyC4IVkzcsid2yPUn8vLUpUyj6lyEjJpKz4';
  const part = 'snippet,statistics,contentDetails'
  const url = `https://www.googleapis.com/youtube/v3/videos?part=${part}&id=${id}&key=${apiKey}`;

  const respons = await fetch(url);
  const data = await respons.json();
  return data.items[0];
} catch(error) {
  console.log(`Error from getVideoFetch,Error code: ${error}`)
}
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