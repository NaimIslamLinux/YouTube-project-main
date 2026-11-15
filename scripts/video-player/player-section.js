import { getVideo } from "../../data/videos.js";
import { getChannel } from "../../data/channels.js";
import { numToString } from "../utils/format-number-to-string.js";

export function updatePlayerHtml() {
    const url = new URL(window.location.href);
    const videoId = url.searchParams.get('videoId');
    const channelId = url.searchParams.get('channelId');

    const video = getVideo(videoId);
    const channel = getChannel(channelId);

    document.querySelector('.js-video-player-tag').src = video.videoUrl;

    document.querySelector('.js-player-video-title').textContent = video.title;

    document.querySelector('.js-player-video-aouth-image').src = channel.image;

    document.querySelector('.js-aouth-channel-name').textContent = channel.name;

    document.querySelector('.js-subscriber-counter').textContent = numToString(channel.subscribers);

    document.querySelector('.js-video-like-counter').textContent = numToString(video.likes);

    document.querySelector('.js-video-view').textContent = numToString(video.views);

    document.querySelector('.js-video-uploaded').textContent = video.uploaded;

    document.querySelector('.js-player-video-description').textContent = video.description;

    document.querySelector('.js-total-comments').textContent = numToString(video.comments);
};

let isDescriptionOpen = false;
const descriptionMoreButtonEl = document.querySelector('.js-description-more-button');

descriptionMoreButtonEl.addEventListener('click', () => {
    const descriptionEl = document.querySelector('.video-description');
    if(!isDescriptionOpen) {
        isDescriptionOpen = true;
        descriptionEl.style.height = 'auto';
        descriptionMoreButtonEl.textContent = "less...";
        descriptionMoreButtonEl.style.background = 'transparent';
        descriptionMoreButtonEl.style.backdropFilter = 'none';
    } else if(isDescriptionOpen) {
        isDescriptionOpen = false;
        descriptionEl.style.height = '150px';
        descriptionMoreButtonEl.textContent = "more...";
        descriptionMoreButtonEl.style.background = 'rgba(255,255,255,0.5)';
        descriptionMoreButtonEl.style.backdropFilter = 'blur(5px)';
    }
})