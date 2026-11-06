import { getVideo } from "../../data/videos.js";
import { getChannel } from "../../data/channels.js";

const url = new URL(window.location.href);
const videoId = url.searchParams.get('videoId');
const channelId = url.searchParams.get('channelId');

const video = getVideo(videoId);
const channel = getChannel(channelId);

document.querySelector('.js-video-player-tag').poster = video.thumbnail;

document.querySelector('.js-player-video-title').innerHTML = video.title;

document.querySelector('.js-player-video-aouth-image').src = channel.image;

document.querySelector('.js-aouth-channel-name').innerHTML = channel.name;

document.querySelector('.js-subscriber-counter').innerHTML = channel.subscribers;

document.querySelector('.js-video-like-counter').innerHTML = video.likes;

document.querySelector('.js-video-view').innerHTML = video.views;

document.querySelector('.js-video-uploaded').innerHTML = video.uploaded;

document.querySelector('.js-player-video-description').innerHTML = video.description;

document.querySelector('.js-total-comments').innerHTML = video.comments;