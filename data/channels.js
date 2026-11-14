import { videos } from "./videos.js";

class Channel {
  constructor(item) {
    this.id = item.id;
    this.name = item.snippet.localized.title;
    this.image = item.snippet.thumbnails.default.url;
    //youtube dont provide if the channel is verifyed so i used isLinked to work with the verification state
    this.verified = item.status.isLinked;
    this.subscribers = item.statistics.subscriberCount;
  }
}

export let channels = [];

export async function loadChannelFetch() {
  const channelsId = [... new Set(videos.map( video => video.channelId))];
  const req = channelsId.map( id => {
    return getChannelFetch(id);
  });
  const result = (await Promise.all(req)).flat();
  result.map(item => {
    channels.unshift(new Channel(item));
  })
};

export function getChannel(channelId) {
  let matchingChannel;
  channels.forEach(channel => {
    if(channel.id === channelId) {
      matchingChannel = channel;
    }
  })
  return matchingChannel;
};

async function getChannelFetch(id) {
  try{
    const apiKey = 'AIzaSyC4IVkzcsid2yPUn8vLUpUyj6lyEjJpKz4';
    const part = 'snippet,statistics,status';
    const url = `https://www.googleapis.com/youtube/v3/channels?part=${part}&id=${id}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.items;
  }
  catch(error) {
    console.log(`Error: ${error}`)
  }
};