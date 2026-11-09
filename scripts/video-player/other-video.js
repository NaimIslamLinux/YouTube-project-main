import { videos } from '../../data/videos.js';
import { getChannel } from '../../data/channels.js';
import { numToString } from '../utils/format-number-to-string.js';

let videoGridHtml = ``;

videos.forEach(video => {
    const channel = getChannel(video.channelId);
    videoGridHtml += 
    `
        <div class="video-preview">
        <div class="left-section">
            <img src="${video.thumbnail}" alt="video thumbnail" class="video-thumbnail">
            <span class="video-duration">${video.duration}</span>
        </div>

        <div class="right-section">
            <h2 class="video-title">
            ${video.title}
            </h2>
            <p class="channel-name">
            ${channel.name}
            </p>
            <div class="video-state">
            <!--- need to update later with a function ----->
            <img class="video-category-icon" src="images/icons/play-solid-full.svg" alt="Play icon">
            <span class="video-views">${numToString(video.views)}</span>
            <span class="video-uploaded-time">${video.uploaded}</span>
            </div>
        <img class="video-more-option" src="images/icons/dot-menu-horizontal-solid-full.svg" alt="video more option">
        </div>
        </div>
    `;
});

document.querySelector('.other-video-grid-section').innerHTML = videoGridHtml;